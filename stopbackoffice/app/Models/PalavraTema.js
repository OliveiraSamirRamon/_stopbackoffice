'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class PalavraTema extends Model {
  static boot () {
  super.boot()
  this.addTrait('NoTimeStamp')
  }
}

module.exports = PalavraTema
