import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {Toaster, toast} from "react-hot-toast"
import "./styles.css"

function truncateContent(content, limit) {
  if (content.length > limit) {
    return content.substring(0, limit) + '...';
  }
  return content;
}

export default function Post({_id, likes, title, creator, postedDate, content, image }) {
  const apiURL = import.meta.env.VITE_API_BASE_URL;

  const truncatedContent = truncateContent(content, 100);
  const [likeCount, setLikeCount] = React.useState(likes);

  const handleDelete = async()=>{
    try{
      const response = await fetch(`${apiURL}/posts/delete-pmessage`,{
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({_id})
      });
  
      const data = await response.json();
      toast.success('Post-memory deletion successful!',{duration: 1500});
      setTimeout(()=>{
        window.location.reload();
      }, 1800);
  
    }
    catch(error)
    {
      toast.error('Post-memory deletion failed!',{duration: 1500});
      toast.error(`${error}`,{duration: 1500});
      console.log("There was a problem with the fetch operation: ", error);
    }
  }

  const handleLike = async () => {
    const newLikesCount = likeCount + 1;
    setLikeCount(newLikesCount); 
  
    try {
      const response = await fetch(`${apiURL}/posts/update-pmessage`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ _id, likeCount: newLikesCount }) // Use newLikesCount here
      });
      const data = await response.json();
      console.log(data.message);
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
    }
  }
  const handleClick = (event) => {
    const element = event.currentTarget;
    element.style.animation = 'heartBeat 0.6s ease-in-out';
    
    // Remove the animation after it ends to reset it
    element.addEventListener('animationend', () => {
      element.style.animation = '';
    }, { once: true });
  };
  return (
    <Card elevation={2} sx={{ ":hover": {boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.3)"}, maxWidth: 320 }}>
      <CardHeader action={ <IconButton aria-label="settings"><MoreVertIcon /></IconButton>}
        title={creator}
        subheader={postedDate}/>
      
      <CardMedia
        component="img"
        height="194"
        image={image}
        alt="memory img"
      />

      <CardContent>
        <Typography variant="h6" sx={{marginBottom: "5px"}} color="text.primary">{title}</Typography>
        <Typography variant="body2" color="text.secondary">{truncatedContent}</Typography>
      </CardContent>

      <CardActions sx={{display: "flex", flexDirection: "row", justifyContent: "space-between"}} disableSpacing>
        <IconButton onClick={handleLike} aria-label="like" sx={{color:'red'}}>
          <FavoriteIcon style={{ fontSize: '25px', display: 'inline-block' }} 
      onClick={handleClick} />
          <Typography sx={{color: "red", fontSize: "20px"}}>{likeCount}</Typography>
        </IconButton>
        <IconButton onClick={handleDelete} aria-label="delete">
          <DeleteForeverIcon/>
        </IconButton>
      </CardActions>
      <Toaster/>
    </Card>
  );
}