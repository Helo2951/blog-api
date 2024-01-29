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
    async updateAuthor(req, res) {
        const {name, lastname} = req.body
        const {id} = req.params

        const [author] = await knex('authors').where({id})

        console.log(!author)

        if(!author){
            throw new Error("Registro Não encontrado")
        }

        author.name = name ?? author.name
        author.lastname = lastname ?? author.lastname

        await knex('authors').where({id}).update({name, lastname}),[author.name, author.lastname]

        res.status(200).json("Registro atualizado com sucesso")
    }

}

module.exports = AuthorsController