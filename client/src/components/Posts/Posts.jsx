import React from 'react';
import { Grid, Typography } from '@mui/material';
import Post from './Post/Post';

const Posts = () => {
  // Assuming posts is an array of post data
  const posts = [
    {
      "_id": "6655ab7f57963fa188c64596",
      "title": "A Beautiful Sunset",
      "message": "I witnessed the most beautiful sunset today at the beach.",
      "Creator": "John Doe",
      "tags": [
        "sunset",
        "beach",
        "nature"
      ],
      "selectedFile": "https://example.com/sunset.jpg",
      "likeCount": 0,
      "createdAt": "2024-05-28T10:01:32.194Z",
      "__v": 0
    },
    {
      "_id": "6655ab8cfaafaac9c0acafad",
      "title": "A Beautiful Sunset",
      "message": "I witnessed the most beautiful sunset today at the beach.",
      "Creator": "John Doe",
      "tags": [
        "sunset",
        "beach",
        "nature"
      ],
      "selectedFile": "https://example.com/sunset.jpg",
      "likeCount": 0,
      "createdAt": "2024-05-28T10:01:47.992Z",
      "__v": 0
    },
    {
      "_id": "6655abd7bdcef054d97476a1",
      "title": "A Beautiful Sunset",
      "message": "I witnessed the most beautiful sunset today at the beach.",
      "Creator": "John Doe",
      "tags": [
        "sunset",
        "beach",
        "nature"
      ],
      "selectedFile": "https://example.com/sunset.jpg",
      "likeCount": 0,
      "createdAt": "2024-05-28T10:03:01.382Z",
      "__v": 0
    },
    {
      "_id": "6655abdf1ac4130f05cf6558",
      "title": "A Beautiful Sunset",
      "message": "I witnessed the most beautiful sunset today at the beach.",
      "Creator": "John Doe",
      "tags": [
        "sunset",
        "beach",
        "nature"
      ],
      "selectedFile": "https://example.com/sunset.jpg",
      "likeCount": 0,
      "createdAt": "2024-05-28T10:03:09.729Z",
      "__v": 0
    },
    {
      "_id": "6655abebaede534bf7f894e3",
      "title": "A Beautiful Sunset",
      "message": "I witnessed the most beautiful sunset today at the beach.",
      "Creator": "John Doe",
      "tags": [
        "sunset",
        "beach",
        "nature"
      ],
      "selectedFile": "https://example.com/sunset.jpg",
      "likeCount": 0,
      "createdAt": "2024-05-28T10:03:22.876Z",
      "__v": 0
    },
    {
      "_id": "6656cbf17f3f673f74ef0dad",
      "title": "A Beautiful Sunset",
      "message": "I witnessed the most beautiful sunset today at the beach.",
      "creator": "John Doe",
      "tags": [
        "sunset",
        "beach",
        "nature"
      ],
      "image": "https://example.com/sunset.jpg",
      "likeCount": 0,
      "createdAt": "2024-05-29T06:29:57.128Z",
      "__v": 0
    },
    {
      "_id": "6656ce7b7f3f673f74ef0db0",
      "title": "ddfd",
      "message": "dff",
      "creator": "dff",
      "tags": [
        "dfff"
      ],
      "image": "https://firebasestorage.googleapis.com/v0/b/dreammemories-9a11f.appspot.com/o/images%2Fmona-lisa-low-quality.jpg%2BWed%20May%2029%202024%2012%3A10%3A55%20GMT%2B0530%20(India%20Standard%20Time)?alt=media&token=aa085306-2572-4f19-b0d5-8d7425a56552",
      "likeCount": 0,
      "createdAt": "2024-05-29T06:29:57.128Z",
      "__v": 0
    },
    {
      "_id": "6656d32c7f3f673f74ef0db3",
      "title": "The Sponge Bob",
      "message": "\"SpongeBob SquarePants\" is an animated television series created by marine science educator and animator Stephen Hillenburg. It premiered on Nickelodeon in 1999 and follows the adventures of SpongeBob, an optimistic and enthusiastic sea sponge, and his friends in the underwater city of Bikini Bottom. The show is known for its humor, unique characters, and broad appeal to both children and adults.",
      "creator": "Kaushi Perera",
      "tags": [
        "#Animation",
        "#Comedy",
        "#UnderwaterAdventures"
      ],
      "image": "https://firebasestorage.googleapis.com/v0/b/dreammemories-9a11f.appspot.com/o/images%2FUODRDCE3KTLWUWUHHRETSAXL7U.jpg%2BWed%20May%2029%202024%2012%3A32%3A49%20GMT%2B0530%20(India%20Standard%20Time)?alt=media&token=0a2d049f-7628-4f0a-9d1b-78532bd80e0a",
      "likeCount": 0,
      "createdAt": "2024-05-29T06:29:57.128Z",
      "__v": 0
    },
    {
      "_id": "6656d5717f3f673f74ef0db8",
      "title": "sd",
      "message": "sd",
      "creator": "sd",
      "tags": [
        "sd"
      ],
      "image": "https://firebasestorage.googleapis.com/v0/b/dreammemories-9a11f.appspot.com/o/images%2Fmona-lisa-low-quality.jpg%2BWed%20May%2029%202024%2012%3A42%3A45%20GMT%2B0530%20(India%20Standard%20Time)?alt=media&token=0b0b17dc-d1ab-454b-9bf2-b44a1d650936",
      "likeCount": 0,
      "createdAt": "2024-05-29T06:29:57.128Z",
      "__v": 0
    }
  ];

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
            <Post title={post.title} creator={post.creator} postedDate={formattedDate(post.createdAt)} image={post.image} content={post.message} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Posts;
