const { Router} = require('express')
const TagsController = require('../controllers/TagsController')

const tagsRouter = Router()

const tagsController = new TagsController

tagsRouter.get('/:post_id', tagsController.listTagsByPostId)

module.exports = tagsRouter