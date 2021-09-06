import axios from '../axios'

export const fetchAllPostData = () => axios.get("/api/getPost")

export const createPost = (data) => axios.post("/api/createPost", data)

export const updatePost = (data) => axios.put("/api/updatePost", data)

export const deletePost = (id) => axios.delete("/api/deletePost", {
    data: {
        id: id
    }
})