import express from "express"
import { initializeApp } from "firebase/app";
import {createPostMessage, getAllPostMessages, uploadFile, deletePostMessage} from "../controllers/postMessageControllers.js"
import fconfig from "../firebase/firebaseConfig.js"
import multer from "multer"

initializeApp(fconfig.firebaseConfig);
const uploadFileMulter = multer({ storage: multer.memoryStorage() })

const route = express.Router();

route.post("/create-pmessage", createPostMessage);
route.get("/get-allpmessages", getAllPostMessages);
route.post("/create-pfile",uploadFileMulter.single('file'), uploadFile);
route.post("/delete-pmessage", deletePostMessage);

export default route;