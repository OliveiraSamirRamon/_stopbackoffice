'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PalavrasSchema extends Schema {
  up () {
    this.create('palavras', (table) => {
      table.increments()
      table.string('nome')
    })
  }


  down () {
    this.drop('palavras')
  }
}

module.exports = PalavrasSchema
