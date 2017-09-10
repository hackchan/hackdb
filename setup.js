'use strict'

const db = require('./')
const debug = require('debug')('hackdb:db:setup')
const inquirer = require('inquirer')
const chalk = require('chalk')

const prompt = inquirer.createPromptModule()

async function setup () {
  const answer = await prompt([{
    type: 'confirm',
    name: 'setup',
    message: 'This will destroy your Database, Are you sure?'
  }])

  if (!answer.setup) {
    return console.log('Nothing happened!!!')
  }

  const config = {
    database: process.env.DB_NAME || 'hackdb',
    username: process.env.DB_USER || 'daniel',
    password: process.env.DB_PASS || 'daniel',
    host: process.env.DB_HOST || '192.168.18.77',
    dialect: 'postgres',
    logging: s => debug(s),
    setup: true
  }

  await db(config).catch(handleFatalError)
  console.log('Succes!')
  process.exit(0)
}

function handleFatalError (err) {
  console.error(`${chalk.red('[fatal error]')} ${err.message}`)
  console.log(err.stack)
  process.exit(1)
}

setup()
