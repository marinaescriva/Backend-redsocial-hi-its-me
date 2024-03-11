import Post from "../models/Post.js";
import User from "../models/User.js";


// router.post('/', createPost);
// router.delete('/:id', deletePost);
// router.put('/', updatePost);
// router.get('/own', getMyOwnPost);
// router.get('/', getAllPost);
// router.get('/:id', getPostById);


export const createPost = async (req, res) => {

    try {
        const nick = req.tokenData.userId
        const text = req.body.text
        const title = req.body.title
        

        if (!text) {
            return res.status(400).json({
                success: false,
                message: "Write some words"
            })
        }


        const newPost = await Post.create({
            nick,
            text,
            title
        })

        res.status(201).json({
            success: true,
            message: "Post created",
            data: newPost
        })

    } catch (error) {
        res.status(500).json(
            {
                success: false,
                message: "Post cannot be created",
                error: error.message
            }
        )
    }
}

// export const deletePost = async (req, res) => {

// }


// export const updatePost = async (req, res) => {

// }


// export const getMyOwnPost = async (req, res) => {

// }


// export const getAllPost = async (req, res) => {

// }

// export const getPostById = async (req, res) => {

// }