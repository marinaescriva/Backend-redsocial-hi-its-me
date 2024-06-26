import Post from "../models/Post.js";



export const createPost = async (req, res) => {

    try {
        const nick = req.tokenData.userId
        const text = req.body.text
        const title = req.body.title
        const image = req.body.image


        if (!text) {
            return res.status(400).json({
                success: false,
                message: "Write some words"
            })
        }


        const newPost = await Post.create({
            nick,
            text,
            title,
            image
            
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

export const deletePost = async (req, res) => {
    try {
        const postId = req.params.id;
        const userId = req.tokenData.userId;

        const findPost = await Post

            .findOne(
                {
                    _id: postId,
                    nick: userId 
                }
            )
        console.log(findPost)

        if (!findPost) {
            res.status(400).json(
                {
                    success: false,
                    message: "cant find a post"
                }
            )
        }

        await Post.deleteOne(
            { _id: postId
        }
        )
        res.status(200).json({
            success: true,
            message: "Post deleted successfuly"
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Post was not deleted",
            error: error.message
        })
    }

}


export const updatePost = async (req, res) => {

    try {
        const postId = req.params.id;
        const userId = req.tokenData.userId;
        const newTitle = req.body.title;

        const findPost = await Post

            .findOne(
                {
                    _id: postId,
                    nick: userId,

                }
            )


        if (!findPost) {
            res.status(400).json(
                {
                    success: false,
                    message: "cant find a post"
                }
            )
        }

        await Post.findOneAndUpdate(
            {
                _id: postId,
                nick: userId,
            },
            {
                title: newTitle
            }
        )
        res.status(200).json({
            success: true,
            message: "Post update successfuly"
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Post was not deleted",
            error: error.message
        })
    }



}


export const getMyOwnPost = async (req, res) => {
    try {

        const userId = req.tokenData.userId
        const ownPosts = await Post.find(
            {
                nick: userId
            }
        )


        if (ownPosts.length <= 0) {
            throw new Error("Any post founded")
        }

        res.status(200).json(
            {
                success: true,
                message: "Posts retrieved succesfully",
                data: ownPosts

            }
        )
    } catch (error) {
        res.status(500).json(
            {
                success: false,
                message: "ERROR",
                error: error.message
            }
        )
    }
}


export const getAllPost = async (req, res) => {

    try {
        const findPosts = await Post.find().populate({path:"nick", select:"name"})

        res.status(201).json(
            {
                success: true,
                message: "All posts retrieved",
                data: findPosts
            }
        )

        if (findPosts === 0) {
            res.status(400).json(
                {
                    success: false,
                    message: "Any post found"
                }
            )
        }

    } catch (error) {
        res.status(500).json(
            {
                success: false,
                message: "Post didn't retrieved",
                error: error.message
            }
        )

    }

}

export const getPostById = async (req, res) => {

    try {

        const postId = req.params.id

        const findPost = await Post.find(
            {
                _id: postId
            }
        )

        if (!findPost || findPost.length === 0) {
            return res.status(400).json(
                {
                    success: false,
                    message: "Id incorrect or any post have this id"
                }
            )
        }

        res.status(200).json(
            {
                success: true,
                message: "Post retrieved successfuly",
                data: findPost
            }
        )

    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message
        })

    }
}

export const giveLikes = async (req, res) => {

    try {

        const postId = req.params.id; //the post would be liked or unliked
        const userId = req.tokenData.userId; //logged user


        const findPost = await Post.findOne(
            {
                _id: postId
            }
        )

        if (!findPost) {
            return res.status(400).json(
                {
                    success: false,
                    message: "Id incorrect or any post have this id",
                    error: error.message
                }
            )
        }

        const postLiked = findPost.likes.includes(userId)

        if (postLiked) {

            findPost.likes.pull(userId) //pull userId bc is already there


        } else {

            findPost.likes.push(userId)  //push userId in likes 

        } 

        const updatedPost = await findPost.save()

        res.status(200).json({
            success: true,
            message: "Post like status updated successfully",
            data: updatedPost
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message
        });
    }

}