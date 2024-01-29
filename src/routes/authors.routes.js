const { Router } = require('express')
const AuthorsController = require('../controllers/AuthorsController')

const authorsRouter = Router()

const authorsController = new AuthorsController()

authorsRouter.post('/', authorsController.create)
authorsRouter.delete('/:id', authorsController.deleteAuthor)
authorsRouter.put('/:id', authorsController.updateAuthor)

module.exports = authorsRouter