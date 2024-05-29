import PMessage from "../model/postMessageModel.js"
import { initializeApp } from "firebase/app"
import { getStorage, ref, getDownloadURL, uploadBytesResumable } from "firebase/storage"
import fconfig from "../firebase/firebaseConfig.js"

initializeApp(fconfig.firebaseConfig);
const storage = getStorage();

export const createPostMessage = async(req, res)=>{
    try{
        const reqData = req.body;
        const pMessage = new PMessage(reqData);
        const savedPmessage = await pMessage.save();
        res.status(200).json({message: "Post Message created succesfully!"})
    }
    catch(err) 
    {
        res.status(404).json({error: err.message});
    }
}

export const getAllPostMessages = async(req, res)=>{
    try{
        const pMessages = await PMessage.find();
        res.status(200).json(pMessages);
    }
    catch(err)
    {
        res.status(404).json({error: err.message});
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
