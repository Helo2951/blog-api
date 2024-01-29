const knex = require('../database/knex')

class AuthorsController{
    async create(req, res) {
        const {name, lastname} = req.body

        await knex('authors').insert({
            name,
            lastname,
        })
        return res.json()
    }
    async deleteAuthor(req, res) {
        const {id} = req.params

        await knex('authors').where({id}).delete()

        res.status(200).json('Registro deletado com sucesso')
    }
}

module.exports = AuthorsController