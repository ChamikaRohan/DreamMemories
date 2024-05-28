import PMessage from "../model/postMessageModel.js"

export const createPostMessage = async(req, res)=>{
    try{
        const reqData = req.body;
        const pMessage = new PMessage(reqData);
        const savedPmessage = await pMessage.save();
        res.status.json({message: "Post Message created succesfully!"})
    }
catch(error)
{
    res.status(500).json({error: "Internal server error"});
}
}