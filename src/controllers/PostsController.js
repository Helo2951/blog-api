const knex = require("../database/knex");

class PostsController {
    async createPosts(req, res) {
        const {title, content, tags} = req.body;
        const {author_id} = req.params

        const [post_id] = await knex('posts').insert({
            title,
            content,
            author_id
        })

        const tagsInsert = tags.map((name)=> {
            return res.json({
                post_id,
                name
            })
        })

        await knex('tags').insert(tagsInsert)

        res.status(201).json('Registro criado com sucesso');
    }

    async listPostsById(req, res) {
        const { id} = req.params

        const post = await knex('posts').where({ id }).first()
        const tags = await knex('tags').where({post_id: id}).orderBy('name')

        return res.json({
            ...post,
            tags,
        })
    }

    async deletePost(req, res) {
        const {id} = req.params

        await knex('posts').where({id}).delete()

        res.status(200).json('Post deletado com sucesso')
    }

    async updatePost(req, res) {
        const {title, content} = req.body
        const {id} = req.params

        await knex('authors').where({id}).update({title, content})

        res.status(200).json("Registro atualizado com sucesso")

    }
}



module.exports = PostsController;