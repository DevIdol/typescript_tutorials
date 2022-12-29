import { Schema, model } from "mongoose";
import { PostCreate } from "../interface/Post";


const PostSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    }
},
    { timestamps: true }
)

export default model<PostCreate>("Post", PostSchema)