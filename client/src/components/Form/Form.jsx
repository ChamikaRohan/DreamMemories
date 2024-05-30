import React, { useEffect, useState } from 'react';
import { TextField, Button, Typography, Paper } from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { styled } from '@mui/material/styles';
import LoadingIcons from 'react-loading-icons'

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

export default function Form({user}) {
  const apiURL = import.meta.env.VITE_API_BASE_URL;

  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [creator, setCreator] = useState("");
  const [tags, setTags] = useState([]);
  const [selectedimg, setSelectedimg] = useState("");
  const [selectedURL, setSelectedURL] = useState("");
  const [imguploadstatus, setImguploadstatus] = useState(false);
  const [imgloading, setImgloading] = useState(false);
  const [isdisabled, setIsdisabled] = useState(true);

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
      setImgloading(true);
      const response = await fetch(`${apiURL}/posts/create-pfile`,{
        method: "POST",
        body: fromdata
      });
      const data = await response.json();
      setSelectedURL(data[["downloadURL"]]);
      setImgloading(false);
      setImguploadstatus(true);
    }
    catch(error)
    {
      console.log(error);
    }
  }

  const handleSubmit = async(e)=>{
    e.preventDefault();
    try{
      const reponse = await fetch(`${apiURL}/posts/create-pmessage`,{
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({title, message, creator, tags, selectedURL, "image": selectedURL})
    });
    console.log(reponse.json());
    setImguploadstatus(false);
    window.location.reload();
    }
  catch(error)
  {
    console.log("There was a problem with the fetch operation: ", error);
  }
  }

  const handleClear = () => {
    setTitle("");
    setMessage("");
    setCreator("");
    setTags([]);
    setSelectedimg("");
    setSelectedURL("");
    setImguploadstatus(false);
    setImgloading(false);
  };

  const handlePaperClick = () =>{
    if (isdisabled){console.log("sdsd");};
  }

  useEffect(()=>{
    if(user){setIsdisabled(false)};
  },[user])

  return (
    <>
    <Paper onClick={handlePaperClick} elevation={3} style={{ padding: '20px', height: 'auto', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      <form onClick={handlePaperClick} autoComplete="off" noValidate style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      <fieldset onClick={handlePaperClick} disabled={isdisabled} style={{ border: 'none', padding: 0 }}>
        <Typography variant="h6">Create a memory</Typography>
        <TextField onClick={handlePaperClick} onChange={(e)=>setCreator(e.target.value)} value={creator} name="creator" variant="outlined" label="Creator" fullWidth margin="normal" />
        <TextField onClick={handlePaperClick} onChange={(e)=>setTitle(e.target.value)} value={title} name="title" variant="outlined" label="Title" fullWidth margin="normal" />
        <TextField onClick={handlePaperClick} onChange={(e)=>setMessage(e.target.value)} value={message} name="message" variant="outlined" label="Message" fullWidth multiline rows={4} margin="normal" />
        <TextField onClick={handlePaperClick} onChange={(e)=>handleTagsChange(e.target.value)} value={tags} name="tags" variant="outlined" label="Tags (comma separated)" fullWidth margin="normal" />
        <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
          <Button disabled={isdisabled} style={{flexGrow: 1, marginRight: "10px"}} onChange={(e)=>setSelectedimg(e.target.files[0])} component="label" variant="contained" tabIndex={-1}>Select picture<VisuallyHiddenInput type="file" accept="image/*" /></Button>
          <Button disabled={isdisabled} onClick={handlePictureUpload} variant="contained" color="primary" size="large" type="submit" fullWidth style={{ maxWidth: "10px" }}>{imgloading? <LoadingIcons.Circles speed={.75} height={24} /> : <CloudUploadIcon />}</Button>
        </div>
        <div style={{ marginTop: '15px' }}>
          <Button onClick={handleSubmit} disabled={(!imguploadstatus) || (isdisabled)} variant="contained" color="primary" size="large" type="submit" fullWidth style={{ marginBottom: '10px' }}>Submit</Button>
          <Button onClick={handleClear} disabled={isdisabled} variant="contained" color="secondary" size="small" fullWidth>Clear</Button>
        </div>
        </fieldset>
      </form>
    </Paper>
    </>
  );
}
