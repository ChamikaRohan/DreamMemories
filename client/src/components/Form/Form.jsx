import React from 'react';
import { TextField, Button, Typography, Paper } from '@mui/material';

export default function Form() {
  return (
    <Paper elevation={3} style={{ padding: '20px', height: '565px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      <form autoComplete="off" noValidate style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <Typography variant="h6">Create a memory</Typography>
        <TextField name="creator" variant="outlined" label="Creator" fullWidth margin="normal" />
        <TextField name="title" variant="outlined" label="Title" fullWidth margin="normal" />
        <TextField name="message" variant="outlined" label="Message" fullWidth multiline rows={4} margin="normal" />
        <TextField name="tags" variant="outlined" label="Tags (comma separated)" fullWidth margin="normal" />
        <div style={{ marginTop: '10px' }}>
          <Button variant="contained" color="primary" size="large" type="submit" fullWidth style={{ marginBottom: '10px' }}>Submit</Button>
          <Button variant="contained" color="secondary" size="small" fullWidth>Clear</Button>
        </div>
      </form>
    </Paper>
  );
}
