const { pool } = require("../database");

class UsersController {
    async createUsers(req, res) {
        const {name, email, password} = req.body;

        const[result] = await pool.query(`
        INSERT INTO users (name, email, password) VALUES (?, ?, ?)
        `, [name, email, password])

        res.status(201).json(result);
    }

    async listAllUsers(req, res) {
        const [rows] = await pool.query(`
            SELECT * FROM users
        `);

        res.status(200).json(rows)
    };

    async listUserById(req, res) {
        const {id} = req.params;
        const [rows] = await pool.query(`
            SELECT * FROM users WHERE id = ${id};
        `)

        res.status(200).json(rows);
    }

    async listUserByEmail(req, res) {
        const {email} = req.body;
        const [rows] = await pool.query(`
            SELECT * FROM users WHERE email = ${email};
        `)

        res.status(200).json(rows);
    }

    async deleteUser(req, res) {
        const {id} = req.params;
        await pool.query(`
            DELETE FROM users WHERE id = ${id};
        `)

        res.status(200).json('Registro deletado com sucesso')
    }

    async updateUser(req, res){
        const {id} = req.params;
        const {name, email} = req.body;

        const user = await pool.query(`
            SELECT * FROM users WHERE id =${id}
        `)

        user.name = name ?? user.name
        user.email = email ?? user.email

        await pool.query(`
            UPDATE users SET name = ?, email = ? WHERE id = ?
        `, [user.name, user.email, id])

        res.status(200).json('Registro Atualizado com sucesso')
    }
}

module.exports = UsersController;