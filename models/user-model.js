import mongoose from "mongoose";

 const UserSchema = new mongoose.Schema({
    userName: String,
    googleId: String,
    thumbnail: String
});

export const UserModel = mongoose.model('User', UserSchema);