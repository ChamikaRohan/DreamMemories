import express from "express"
import {createPostMessage, getAllPostMessages} from "../controllers/postMessageControllers.js"

const route = express.Router();

route.post("/create-pmessage", createPostMessage);
route.get("/get-allpmessages", getAllPostMessages);


export default route;