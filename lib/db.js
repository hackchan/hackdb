'use strict'

/** sequelize es singlenton esto quiere decir que cada vez
 * que la instancie siempre devuelve el mismo objeto */
const Sequelize = require('sequelize')
let sequelize = null

module.exports = function setupDatabase (config) {
  if (!sequelize) {
    sequelize = new Sequelize(config)
  }

  return sequelize
}
