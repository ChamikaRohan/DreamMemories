import express from "express"
import { initializeApp } from "firebase/app";
import {createPostMessage, getAllPostMessages, uploadFile, deletePostMessage, updatePostMessage} from "../controllers/postMessageControllers.js"
import fconfig from "../firebase/firebaseConfig.js"
import multer from "multer"
import { cookieJwtAuth } from "../middlewares/cookieJwtAuth.js"

initializeApp(fconfig.firebaseConfig);
const uploadFileMulter = multer({ storage: multer.memoryStorage() })

const route = express.Router();

route.post("/create-pmessage", createPostMessage);
route.get("/get-allpmessages", getAllPostMessages);
route.post("/create-pfile",uploadFileMulter.single('file'), uploadFile);
route.post("/delete-pmessage", deletePostMessage);
route.post("/update-pmessage", updatePostMessage);

export default route;