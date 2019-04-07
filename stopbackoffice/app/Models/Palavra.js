'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Palavra extends Model {

  static boot () {
  super.boot()
  this.addTrait('NoTimeStamp')
}
 temas(){
   return this.belongsToMany('App/Models/Tema')
 }
}

module.exports = Palavra
