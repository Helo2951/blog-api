const path = require('path')
/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {

  development: {
    client: 'mysql2',
    connection: {
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'blog'
    },
    migrations: {
      directory: path.resolve(
        __dirname, 'src', 'database', 'knex', 'migrations'
      )
    },
    useNullAsDefault: true
  }
};
