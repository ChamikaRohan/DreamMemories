import React, {useEffect, useState} from 'react';
import { Container, CssBaseline, Typography, AppBar, Grow, Grid, colors, Box } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import NoAccountsIcon from '@mui/icons-material/NoAccounts';
import memories from "../assets/memories.png";
import Posts from "../components/Posts/Posts.jsx";
import Form from "../components/Form/Form.jsx";
import { useNavigate } from 'react-router-dom';
import { checkUser } from "../middlewares/CheckUser.js"
import authBg from '../assets/page_bg.jpg';
import WelcomePage from './WelcomePage.jsx';
import Cookies from 'js-cookie';
import Badge from '@mui/material/Badge';

export default function Home() {
    const [firsttime, setFirsttime] = useState(false);
    const [userStatus, setUserStatus] = useState(false);

    const apiURL = import.meta.env.VITE_API_BASE_URL;
    const navigate = useNavigate();
    const handleLogin = () =>{
      navigate("/signup")
    }
  
    useEffect(() => {
      const isFirstTime = Cookies.get('first_time');
      if(isFirstTime){setFirsttime(isFirstTime);}
      
      const fetchUserStatus = async () => {
        const checkedUser = await checkUser();
        setUserStatus(checkedUser);
      };
  
      fetchUserStatus();
  }, []);
  
    return (
    <div>
    {!firsttime ? <WelcomePage/> :
      <Container maxWidth={false} disableGutters sx={{backgroundImage: `url(${authBg})`, backgroundSize: "cover", backgroundPosition: "center"}}>
      <Container maxWidth="lg">
        <CssBaseline />
        <AppBar position='static' color='inherit' style={{ border: "black solid", borderWidth: 1 , marginTop: "10px", borderRadius: '20px', marginBottom: '20px', padding: '5PX' }}>
          <Container sx={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px' }}>
                <Typography sx={{marginLeft: '20px',fontFamily: 'Poppins Medium',fontSize: {xs: '1.5rem', sm: '2rem',md: '3rem'}}} variant='h4' color="text.primary" align="center" >MEMORIES</Typography>
                <Box component="img" src={memories} alt="Placeholder" sx={{width: {xs: '32px', sm: '40px', md: '50px'},height: 'auto'}}/>
              </div>
              <div style={{marginRight: "20px"}}>
                <Badge overlap="circular" badgeContent=" " variant="dot" color={userStatus? "success" : "error"}>
                  {userStatus ? 
                  <AccountCircleIcon onClick={handleLogin} sx={{width: {xs: '32px', sm: '40px', md: '50px'},height: 'auto'}} /> :
                  <NoAccountsIcon onClick={handleLogin} sx={{width: {xs: '32px', sm: '40px', md: '50px'},height: 'auto'}} /> 
                  }
                </Badge>
              </div>
          </Container>
        </AppBar>
        <Grow in>
          <Container>
            <Grid container justifyContent="space-between" alignItems="stretch" spacing={3}>
              <Grid item xs={12} sm={8}>
                <Posts user={userStatus} />
              </Grid>
              <Grid item xs={12} sm={4}>
                <Form user={userStatus} />
              </Grid>
            </Grid>
          </Container>
        </Grow>
      </Container>
      <Container sx={{ marginBottom: "20px"}} />
      </Container>}
      </div>
    );
  }
  