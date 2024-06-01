import React from 'react';
import { Container, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import authBg from '../assets/page_bg.jpg';
import { TypeAnimation } from 'react-type-animation';

export default function WelcomePage() {
  return (
    <Container
      maxWidth={false}
      disableGutters
      sx={{
        backgroundImage: `url(${authBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "95vh",
        width: "99vw",
        padding: 0,
        margin: 0,
      }}
    >
      <Typography sx={{marginBottom: "20px" , padding: "9px",borderRadius: "9px",":hover":{ color: "white" ,backgroundColor:" black"  , borderRadius: "9px" ,transition:"1.5s" }, fontWeight: "600" , fontSize: { xs: '1.3rem', sm: '2rem', md: "3rem" } }} component="h1" >
        Welcome to Dream Memories
      </Typography>
      <TypeAnimation
      sequence={[
        "It's a place where memories are created...",
        1000,
        "It's a place where every photo tells a story...",
        1000,
        "It's a place to experience the joy of best moments...",
        1000,
        "It's a place celebrating life, one memory at a time...",
        1000
      ]}
      wrapper="span"
      speed={50}
      style={{fontFamily: "Poppins Regular",  color: "gray",fontSize: { xs: '0.6rem', sm: '1rem', md: "1.3rem" } }}
      repeat={Infinity}
    />
    <div>
        <Button variant="contained" color="primary" component={Link} to="/Home" sx={{
            margin: 1,
            marginTop: 3, 
            borderRadius: 20,
            padding: '8px 15px', 
            fontWeight: 'bold', 
            fontSize: { xs: '0.9rem', sm: '1rem', md: '1.1rem' }, // Responsive font size
            background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)', // Gradient background
            boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)', // Box shadow
            transition: 'transform 0.3s', // Add transition
            '&:hover': {
              transform: 'scale(1.05)', // Scale effect on hover
            }
          }}>
          Get Started
        </Button>
      </div>
    </Container>
  );
}
