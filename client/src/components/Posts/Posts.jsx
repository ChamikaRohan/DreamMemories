import React, { useEffect, useState } from 'react';
import { Grid, Typography } from '@mui/material';
import Post from './Post/Post';

const Posts = () => {
  const apiURL = import.meta.env.VITE_API_BASE_URL;
  const [posts, setPosts] = useState([]); 

  const getAllPosts = async() =>{
    const response = await fetch(`${apiURL}/posts/get-allpmessages`);
    const data = await response.json();
    setPosts(data);
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
      <Grid container spacing={3} >
        {posts.map((post) => (
          <Grid item xs={12} sm={6} key={post._id}>
            <Post _id={post._id} likes={post.likeCount} title={post.title} creator={post.creator} postedDate={formattedDate(post.createdAt)} image={post.image} content={post.message} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Posts;
