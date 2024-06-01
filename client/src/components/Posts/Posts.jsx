import React, { useEffect, useState } from 'react';
import { CircularProgress, Grid, Typography } from '@mui/material';
import Post from './Post/Post';

const Posts = ({user}) => {
  const apiURL = import.meta.env.VITE_API_BASE_URL;
  const [posts, setPosts] = useState([]); 
  const [isgetpostLoading, setIsgetpostLoading] = useState(true);

  const getAllPosts = async() =>{
    setIsgetpostLoading(true);
    try{
    const response = await fetch(`${apiURL}/posts/get-allpmessages`);
    const data = await response.json();
    setIsgetpostLoading(false);
    setPosts(data);
    }
    catch(error)
    {
      setIsgetpostLoading(true);
      console.log("There was a problem with the fetch operation: ", error);
    }
  };
  
  useEffect(()=>{
    getAllPosts();
  },[]);

  const formattedDate = (date)=>{
    return new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric"
    });
  } 


 
  return (
      <>
      {isgetpostLoading ? (
        <Grid container justifyContent="center" alignItems="center" style={{ height: '100vh' }}>
          <Typography style={{ fontFamily: "Poppins Regular", marginRight: "20px"}}>Fetching Data...please wait</Typography>
          <CircularProgress />
        </Grid>
      ) : (
        <Grid container spacing={3}>
          {posts.map((post) => (
            <Grid item xs={12} sm={6} key={post._id}>
              <Post
                user={user}
                _id={post._id}
                likes={post.likeCount}
                title={post.title}
                creator={post.creator}
                postedDate={formattedDate(post.createdAt)}
                image={post.image}
                content={post.message}
              />
            </Grid>
          ))}
        </Grid>
      )}
    </>
  );
};

export default Posts;
