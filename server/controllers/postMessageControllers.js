import PMessage from "../model/postMessageModel.js"
import { initializeApp } from "firebase/app"
import { getStorage, ref, getDownloadURL, uploadBytesResumable } from "firebase/storage"
import fconfig from "../firebase/firebaseConfig.js"
import User from "../model/userModel.js"

initializeApp(fconfig.firebaseConfig);
const storage = getStorage();

export const createPostMessage = async(req, res)=>{
    try{
        const reqData = req.body;

        const title = reqData.title;
        const message = reqData.message;
        const tags = reqData.tags;
        const image = reqData.image;
        const id = req.id;

        const findUser = await User.findById(id);
        if (!findUser) return res.status(401 ).json({error: "Unauthorized, please signup!"});

        const username = findUser.firstName + " " + findUser.lastName;
        const creator = username;

        const pmsgContent = {title,message,creator,tags,image};

        const pMessage = new PMessage(pmsgContent);
        const savedPmessage = await pMessage.save();
        res.status(200).json({message: "Post Message created succesfully!"})
    }
    catch(err) 
    {
        res.status(500).json({error: err.message});
    }
}

export const getAllPostMessages = async(req, res)=>{
    try{
        const pMessages = await PMessage.find();
        res.status(200).json(pMessages);
    }
    catch(err)
    {
        res.status(500).json({error: err.message});
    }
}

export const deletePostMessage = async(req, res)=>{
  try{
      const reqData = await req.body;
      const id = reqData._id;
      const postExists = await PMessage.findOne({_id:id});
      if (!postExists) return res.status(404).json({error: "Post message not found!"});
      const deletedPost = await PMessage.findByIdAndDelete(id);
      res.status(201).json({message: "Post message deleted successfully"});
  }
  catch(err)
  {
      res.status(500).json({error: err.message});
  }
}

export const updatePostMessage = async(req, res)=>{
  try{
    const reqData = req.body;
    const id = reqData._id;

    const postExists = await PMessage.findOne({ _id: id });
    if (!postExists) return res.status(404).json({ error: "Post message not found!" });

    const updateData = {};
    if (reqData.title) updateData.title = reqData.title;
    if (reqData.message) updateData.message = reqData.message;
    if (reqData.creator) updateData.creator = reqData.creator;
    if (reqData.tags) updateData.tags = reqData.tags;
    if (reqData.image) updateData.image = reqData.image;
    if (reqData.likeCount) updateData.likeCount = reqData.likeCount;
    if (reqData.createdAt) updateData.createdAt = reqData.createdAt;

    const updatedPost = await PMessage.findByIdAndUpdate(id, { $set: updateData }, { new: true });

    res.status(200).json({message: "Post message succesfully updated!"});
  }
  catch(err)
  {
      res.status(500).json({error: err.message});
  }
}


export const uploadFile = async (req, res) => {
    try {
      const currentDateTime = new Date();
      if (!req.file) {
        return res.status(400).json({ error: "No file uploaded" });
      }
  
      const storageRef = ref(storage, `images/${req.file.originalname}+${currentDateTime}`);
      const metadata = {
        contentType: req.file.mimetype,
      };
  
      const uploadTask = uploadBytesResumable(storageRef, req.file.buffer, metadata);
  
      uploadTask.on(
        'state_changed',
        (snapshot) => {
          // Handle upload progress
        },
        (error) => {
          res.status(500).json({ error: error.message });
        },
        async () => {
          // Upload completed successfully, get the download URL
          const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
          res.status(200).json({ message: "File uploaded successfully!", downloadURL });
        }
      );
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
}
