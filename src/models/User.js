import { Schema, model } from "mongoose";


const UserSchema = new Schema(
    {
        name: {
            type: String,
            required: false
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true
        },
        role: {
            type: String,
            required: true,
            enum: ["user", "admin", "super_admin"],
            default: "super_admin"
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
)

const User = model('User', UserSchema)

export default User