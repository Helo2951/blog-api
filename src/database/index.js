const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'blog'
}).promise()

async function connection() {
    await pool.connect((err) => {
        if(err) {
            throw err;
        }
        console.log('MySql Connected ...')
    })
    pool.destroy()
}

module.exports = {connection, pool}