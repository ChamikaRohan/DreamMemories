import React, {useEffect, useState} from 'react';
import { Container, CssBaseline, Typography, AppBar, Grow, Grid, colors } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import memories from "../assets/memories.png";
import Posts from "../components/Posts/Posts.jsx";
import Form from "../components/Form/Form.jsx";
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

export default function Home() {
  const navigate = useNavigate();
  const handleLogin = () =>{
    navigate("/signup")
  }

  useEffect(() => {
    console.log("sddf");
    const access_token = Cookies.get('access_token');
    console.log(access_token);
}, []);

  return (
    <Container maxWidth="lg">
      <CssBaseline />
      <AppBar position='static' color='inherit' style={{ border: "black solid", borderWidth: 1 , marginTop: "10px", borderRadius: '20px', marginBottom: '20px', padding: '5PX' }}>
        <div style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px' }}>
              <Typography variant='h3' color="text.primary" align="center" style={{ marginLeft: "20px", fontFamily: 'Poppins Medium' }}>MEMORIES</Typography>
              <img src={memories} alt="memories" style={{ width: '50px', height: '50px' }} />
            </div>
            <div style={{marginRight: "20px"}}>
              <AccountCircleIcon onClick={handleLogin} style={{ width: '50px', height: '50px' }} />
            </div>
        </div>
      </AppBar>
      <Grow in>
        <Container>
          <Grid container justifyContent="space-between" alignItems="stretch" spacing={3}>
            <Grid item xs={12} sm={8}>
              <Posts />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form user={true} disabled={true} />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
}
