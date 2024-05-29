import React from 'react';
import { Container, CssBaseline, Typography, AppBar, Grow, Grid, colors } from '@mui/material';
import memories from "./assets/memories.png";
import Posts from "./components/Posts/Posts.jsx";
import Form from "./components/Form/Form.jsx";

export default function App() {
  return (
    <Container maxWidth="lg">
      <CssBaseline />
      <AppBar position='static' color='inherit' style={{ border: "black solid", borderWidth: 1 , marginTop: "10px", borderRadius: '20px', marginBottom: '20px', padding: '5PX' }}>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '20px' }}>
          <Typography variant='h2' color="text.primary" align="center" style={{ fontFamily: 'Poppins Medium' }}>MEMORIES</Typography>
          <img src={memories} alt="memories" style={{ width: '50px', height: '50px' }} />
        </div>
      </AppBar>
      <Grow in>
        <Container>
          <Grid container justifyContent="space-between" alignItems="stretch" spacing={3}>
            <Grid item xs={12} sm={8}>
              <Posts />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
}
