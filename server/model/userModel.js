import mongoose from 'mongoose';
import bcrypt from 'bcryptjs'

const userSchema = new mongoose.Schema({
    firstName: {
        required: true,
        type: "String"
    },
    lastName: {
        required: true,
        type: "String"
    },
    email: {
        required: true,
        type: "String"
    },
    password: {
        required: true,
        type: "String"
    }
},{ timestamps:true })

userSchema.pre("save", async function(next)
{
    if(!this.isModified('password')){ return next(); };
    try{
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
        next();
    }
    catch(error)
    {
        next(error);
    }
})

userSchema.methods.comparePassword = async function(candidatePassword)
{
    return await bcrypt.compare(candidatePassword, this.password);
}

export default mongoose.model("users", userSchema);