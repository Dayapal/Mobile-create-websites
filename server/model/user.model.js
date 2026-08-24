import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true,'name is required'],
        minLength: 3,
        maxLength: 50,
        trim: true,
    },
    email:{
        type: String,
        required: [true,'email is required'],
        unique: true,
        trim: true,
    },
    password: {
        type: String,
        required: [true,'password is required'],
        minLength: 6,}
}, {timestamps: true});
const User = mongoose.model("User", userSchema);
export default User;