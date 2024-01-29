const {Router} = require('express');
const postsRouter = require('./posts.routes');
const usersRouter = require('./users.routes');
const authorsRouter = require('./authors.routes');

const routes = Router();

routes.use('/posts', postsRouter)
routes.use('/users', usersRouter)
routes.use('/authors', authorsRouter)


module.exports = routes;