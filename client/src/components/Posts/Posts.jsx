import React from 'react';
import { Grid, Typography } from '@mui/material';
import Post from './Post/Post';

const Posts = () => {
  // Assuming posts is an array of post data
  const posts = [
    { id: 1, title: 'Post 1', content: 'Content 1' },
    { id: 2, title: 'Post 2', content: 'Content 2' },
    { id: 3, title: 'Post 3', content: 'Content 3' },
    // Add more posts as needed
  ];

  return (
    <>
      <Grid container spacing={3} >
        {posts.map((post) => (
          <Grid item xs={12} sm={6} key={post.id}>
            <Post post={post} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Posts;
