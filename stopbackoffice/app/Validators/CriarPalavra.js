'use strict'

class CriarPalavra {
  get rules () {
    return {
      nome: 'required'
    }
  }
  get messages(){
    return{
      'required': 'O campo é obrigatório'
    }
  }

  async fails(error) {
  this.ctx.session.withErrors(error)
    .flashAll();
  return this.ctx.response.redirect('back');
  }
}

module.exports = CriarPalavra
