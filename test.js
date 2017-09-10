const debug = require('debug')('hackdb:db:test')
const setupDatabase = require('./lib/db')

async function setup () {
  const config = {
    database: process.env.DB_NAME || 'hackdb',
    username: process.env.DB_USER || 'daniel',
    password: process.env.DB_PASS || 'daniel',
    host: process.env.DB_HOST || '192.168.18.77',
    dialect: 'postgres',
    logging: s => debug(s),
    setup: true
  }
  const sequelize = setupDatabase(config)
  await sequelize.authenticate()
}

setup()
