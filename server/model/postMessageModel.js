import mongoose from "mongoose"

const postMessageSchema = mongoose.Schema({
    title:{
        required: true,
        type: "String"
    },
    message: {
        required: true,
        type: "String"
    },
    Creator: {
        required: true,
        type: "String"
    },
    tags: {
        type: [String],
        required: false
    },
    selectedFile: {
        required: false,
        type: "String"
    },
    likeCount: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: new Date()
    }
})

export default mongoose.model("postMessages", postMessageSchema);