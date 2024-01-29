const {Router} = require('express');
const postsRouter = require('./posts.routes');
const usersRouter = require('./users.routes');
const authorsRouter = require('./authors.routes');
const tagsRouter = require('./tags.routes');

const routes = Router();

routes.use('/posts', postsRouter)
routes.use('/users', usersRouter)
routes.use('/authors', authorsRouter)
routes.use('/tags', tagsRouter)


module.exports = routes;