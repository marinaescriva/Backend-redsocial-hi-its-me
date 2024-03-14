import { Schema, model } from "mongoose";


export const PostSchema = new Schema(
    {
        title: {
            type: String,
            required: true
        },
        text: {
            type: String,
            required: true
        },
        // like: {
        //     type: Boolean,
        //     required: false,
        //     default: false
        // },
        likes:[
            {
                type: Schema.Types.ObjectId,
                ref:'User'
            }
        ],
        nick: [
            {
                type: Schema.Types.ObjectId,
                ref: 'User'
            }
        ]
    },
    {
        timestamps: true,
        versionKey: false
    }
)

const Post = model('Post', PostSchema)

export default Post