'use strict'

class CriarTema {
  get rules () {
    return {
      nome: 'required',
      descricao: 'required'
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

module.exports = CriarTema
