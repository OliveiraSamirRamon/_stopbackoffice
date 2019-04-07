'use strict'

class IncluirPalavra {
  get rules () {
    return {
      nome: 'required'
    }
  }
  get messages() {
  return {
    'required': 'Campo obrigatorio'
    }
  }

  async fails(error) {
      this.ctx.session.withErrors(error)
        .flashAll();
      return this.ctx.response.redirect('back');
    }

}

module.exports = IncluirPalavra
