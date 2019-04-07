'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Tema extends Model {

  static boot () {
  super.boot()
  this.addTrait('NoTimeStamp')
}
  palavras(){
    return this.belongsToMany('App/Models/Palavra')
  }
}


module.exports = Tema
