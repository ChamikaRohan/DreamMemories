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
  const apiURL = import.meta.env.VITE_API_BASE_URL;

  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [creator, setCreator] = useState("");
  const [tags, setTags] = useState([]);
  const [selectedimg, setSelectedimg] = useState("");
  const [selectedURL, setSelectedURL] = useState("");

  const handleTagsChange = (input) => {
    const tagsArray = input.split(',').map(tag => tag.trim());
    setTags(tagsArray);
  };

  const handlePictureUpload = async(e)=>{
    e.preventDefault();
    if(!selectedimg){console.log("No file selected!");return;}
    const fromdata = new FormData();
    fromdata.append("file", selectedimg);

    try{
      const response = await fetch(`${apiURL}/posts/create-pfile`,{
        method: "POST",
        body: fromdata
      });
      const data = await response.json();
      setSelectedURL(data[["downloadURL"]]);
    }
    catch(error)
    {
      console.log(error);
    }
  }

  const handleSubmit = async()=>{
    
  }

  return (
    <Paper elevation={3} style={{ padding: '20px', height: '635px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      <form autoComplete="off" noValidate style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <Typography variant="h6">Create a memory</Typography>
        <TextField onChange={(e)=>setCreator(e.target.value)} value={creator} name="creator" variant="outlined" label="Creator" fullWidth margin="normal" />
        <TextField onChange={(e)=>setTitle(e.target.value)} value={title} name="title" variant="outlined" label="Title" fullWidth margin="normal" />
        <TextField onChange={(e)=>setMessage(e.target.value)} value={message} name="message" variant="outlined" label="Message" fullWidth multiline rows={4} margin="normal" />
        <TextField onChange={(e)=>handleTagsChange(e.target.value)} value={tags} name="tags" variant="outlined" label="Tags (comma separated)" fullWidth margin="normal" />
        <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
          <Button style={{flexGrow: 1, marginRight: "10px"}} onChange={(e)=>setSelectedimg(e.target.files[0])} component="label" variant="contained" tabIndex={-1}>Select picture<VisuallyHiddenInput type="file" accept="image/*" /></Button>
          <Button onClick={handlePictureUpload} variant="contained" color="primary" size="large" type="submit" fullWidth style={{ maxWidth: "10px" }}><CloudUploadIcon /></Button>
        </div>
        {selectedimg && <Typography variant="body2" style={{ marginTop: '10px' }}>{selectedimg.name}</Typography>}
        <div style={{ marginTop: '10px' }}>
          <Button onClick={handleSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth style={{ marginBottom: '10px' }}>Submit</Button>
          <Button variant="contained" color="secondary" size="small" fullWidth>Clear</Button>
        </div>
      </form>
    </Paper>
  );
}
