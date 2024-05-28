import React from 'react';
import { Container, CssBaseline, Typography, AppBar, Grow, Grid } from '@mui/material';
import memories from "./assets/memories.png";
import Posts from "./components/Posts/Posts.jsx";
import Form from "./components/Form/Form.jsx";

export default function App() {
  return (
    <Container maxWidth="lg">
      <CssBaseline />
      <AppBar position='static' color='inherit' style={{ borderRadius: '20px', marginBottom: '30px', padding: '10px' }}>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '20px' }}>
          <Typography variant='h2' align="center" style={{ fontFamily: 'Poppins Medium', color: 'brown' }}>Memories</Typography>
          <img src={memories} alt="memories" style={{ width: '50px', height: '50px' }} />
        </div>
      </AppBar>
      <Grow in>
        <Container>
          <Grid container justifyContent="space-between" alignItems="stretch" spacing={3}>
            <Grid item xs={12} sm={7}>
              <Posts />
            </Grid>
            <Grid item xs={12} sm={5}>
              <Form />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
}
