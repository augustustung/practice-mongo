import express from 'express'
import postController from '../controllers/post.controller'

let router = express.Router();
let initPostRoute = (app) => {
    app.get('/', (req, res) => res.send('Helllo, World!'));
    app.get('/api/getPost', postController.getPost);
    app.post('/api/createPost', postController.createPost);
    app.put('/api/updatePost', postController.updatePost)
    app.delete("/api/deletePost", postController.deletePost)
    app.use('/', router);
}

module.exports = initPostRoute;