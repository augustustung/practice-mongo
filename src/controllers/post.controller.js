import postService from '../services/post.service'

const getPost = async (req, res) => {
    try {
        let posts = await postService.getPostService()
        return res.status(200).json(posts)
    } catch (e) {
        return res.status(500).json({
            errCode: -1,
            errMessage: "Error from server"
        })
    }
}

const createPost = async (req, res) => {
    try {
        let message = await postService.createPostService(req.body)
        return res.status(200).json(message)
    } catch (e) {
        return res.status(500).json({
            errCode: -1,
            errMessage: "Error from server"
        })
    }
}

const updatePost = async (req, res) => {
    try {
        let message = await postService.updatePostService(req.body)
        return res.status(200).json(message)
    } catch (e) {
        return res.status(500).json({
            errCode: -1,
            errMessage: "Error from server"
        })
    }
}

const deletePost = async (req, res) => {
    let id = req.body.id;

    let message = await postService.deletePostService(id)
    return res.status(200).json(message)
}

module.exports = {
    getPost: getPost,
    createPost: createPost,
    updatePost: updatePost,
    deletePost: deletePost
}