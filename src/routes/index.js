const {Router} = require('express');
const postsRouter = require('./posts.routes');
const usersRouter = require('./users.routes');

const routes = Router();

routes.use('/posts', postsRouter)
routes.use('/users', usersRouter)


module.exports = routes;