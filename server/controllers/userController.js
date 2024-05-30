import User from "../model/userModel.js"
import jwt from 'jsonwebtoken'

export const signup = async (req, res)=>{
    try{
    const userData = new User(req.body);
    const {email} = userData;
    const userExists = await User.findOne({email});
    if (userExists) return res.status(400).json({error: "User already exists!"});
    const user = await userData.save();
    res.status(200).json({message: "User created succesfully!"})
    }
    catch(error)
    {
        res.status(500).json({error: "Internal server error"});
    }
}

export const signin = async (req, res)=>{
    try
    {const userData = req.body;
    const {email, password} = userData;
    const userExists = await User.findOne({email});
    if (!userExists) return res.status(401 ).json({error: "Unauthorized, please signup!"});
    const isMatch = await userExists.comparePassword(password);
    if(!isMatch){return res.status(401).json({ error: 'Invalid password' });};
    
    const token = jwt.sign({id: userExists._id}, process.env.JWT_SECRET,{ expiresIn: '2h'});
    res.cookie("access_token", token, {httpOnly: true}).status(200).json({access_token: `${token}`});
    } 
    catch (error) {
        res.status(500).json({error: "Internal server error"});
    }
}

export const auth = async (req, res) =>{
    res.status(200).json({user: true});
}