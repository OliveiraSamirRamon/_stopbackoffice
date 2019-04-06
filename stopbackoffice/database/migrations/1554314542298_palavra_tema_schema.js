'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PalavraTemaSchema extends Schema {
  up () {
    this.create('palavra_tema', (table) => {
      table
        .integer('palavra_id')
        .unsigned()
        .references('palavras.id')
        .onDelete('cascade')
        .index('palavra_id')

      table
        .integer('tema_id')
        .unsigned()
        .references('temas.id')
        .onDelete('cascade')
        .index('tema_id')

    })
  }

  down () {
    this.drop('palavra_tema')
  }
}

module.exports = PalavraTemaSchema
