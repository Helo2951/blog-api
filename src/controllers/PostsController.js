const { pool } = require("../database");

class PostsController {
    async createPosts(req, res) {
        const {title, content, tags} = req.body;
        const [result] = await pool.query(`
            INSERT INTO posts (title, content, tags) VALUES (?, ?, ?)
        `, [title, content, tags])

        res.status(201).json(result);
    }

    async listAllPosts(req, res) {
        const [rows] = await pool.query(`
            SELECT * FROM posts
        `);

        res.status(200).json(rows)
    };

    async listPostsById(req, res) {
        const {id} = req.params;
        const [rows] = await pool.query(`
            SELECT * FROM posts WHERE id = ${id};
        `);

        res.status(200).json(rows);
    }

    async listPostsByTitle(req, res) {
        const {title} = req.body;
        const [rows] = await pool.query(`
            SELECT * FROM posts WHERE title = ${title};
        `)

        res.status(200).json(rows);
    }

    async deletePosts(req, res) {
        const {id} = req.params;
        await pool.query(`
            DELETE FROM posts WHERE id = ${id}
        `)

        res.status(200).json("Post deletado com sucesso");
    }
}

module.exports = PostsController;