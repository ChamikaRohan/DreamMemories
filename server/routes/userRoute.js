import express from 'express'
import { signup, signin, auth } from '../controllers/userController.js'
import { cookieJwtAuth } from "../middlewares/cookieJwtAuth.js"

const route = express.Router();

route.post('/signup', signup);
route.post('/signin', signin);
route.post('/auth',cookieJwtAuth, auth);

export default route;