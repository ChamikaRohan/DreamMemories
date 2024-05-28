import express from "express"
import {createPostMessage} from "../controllers/postMessageControllers.js"

const route = express.Router();

route.post("/create-pmessage", createPostMessage);

export default route;