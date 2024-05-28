import PMessage from "../model/postMessageModel.js"

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