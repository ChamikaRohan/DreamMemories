import React, { useState } from 'react';
import { TextField, Button, Typography, Paper } from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { styled } from '@mui/material/styles';

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});

export default function Form() {
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [creator, setCreator] = useState("");
  const [tags, setTags] = useState([]);
  const [selectedimg, setSelectedimg] = useState("");

  const handleTagsChange = (input) => {
    const tagsArray = input.split(',').map(tag => tag.trim());
    setTags(tagsArray);
  };

  const handlePictureUpload = async()=>{
    fetch()
  }

  return (
    <Paper elevation={3} style={{ padding: '20px', height: '635px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      <form autoComplete="off" noValidate style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <Typography variant="h6">Create a memory</Typography>
        <TextField onChange={(e)=>setCreator(e.target.value)} value={creator} name="creator" variant="outlined" label="Creator" fullWidth margin="normal" />
        <TextField onChange={(e)=>setTitle(e.target.value)} value={title} name="title" variant="outlined" label="Title" fullWidth margin="normal" />
        <TextField onChange={(e)=>setMessage(e.target.value)} value={message} name="message" variant="outlined" label="Message" fullWidth multiline rows={4} margin="normal" />
        <TextField onChange={(e)=>handleTagsChange(e.target.value)} value={tags} name="tags" variant="outlined" label="Tags (comma separated)" fullWidth margin="normal" />
        <Button onClick={handlePictureUpload} onChange={(e)=>setSelectedimg(e.target.files[0])} component="label" role={undefined} variant="contained" tabIndex={-1} startIcon={<CloudUploadIcon />}>Upload picture<VisuallyHiddenInput type="file" accept="image/*" /></Button>
        {selectedimg && <Typography variant="body2" style={{ marginTop: '10px' }}>{selectedimg.name}</Typography>}
        <div style={{ marginTop: '10px' }}>
          <Button variant="contained" color="primary" size="large" type="submit" fullWidth style={{ marginBottom: '10px' }}>Submit</Button>
          <Button variant="contained" color="secondary" size="small" fullWidth>Clear</Button>
        </div>
      </form>
    </Paper>
  );
}
