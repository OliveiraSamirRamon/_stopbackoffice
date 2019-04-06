'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TemasSchema extends Schema {
  up () {
    this.create('temas', (table) => {
      table.increments()
      table.string('nome')
      table.string('descricao')
    })
  }

  down () {
    this.drop('temas')
  }
}

module.exports = TemasSchema
