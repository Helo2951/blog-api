const {Router} = require('express');
const PostsController = require('../controllers/PostsController');

const postsRouter = Router()
const postsController = new PostsController();

// postsRouter.get('/', (req, res) => {
//     const {page, limit} = req.query;
//     res.send(`Page: ${page}, Limit: ${limit}`)
// });
// postsRouter.get('/:id/:title',(req, res) => {
//     const {id, title} = req.params
//     res.send(`Id: ${id} Title:${title}`)
// });

postsRouter.post('/', postsController.createPosts);
postsRouter.get('/', postsController.listAllPosts);
postsRouter.get('/:id', postsController.listPostsById);
postsRouter.delete('/:id', postsController.deletePosts);
postsRouter.get('/:title', postsController.listPostsByTitle)

module.exports = postsRouter;