'use strict'

const Palavra = use('App/Models/Palavra')

class PalavraController {
  async home({view}){
    const palavras = await Palavra.all();

    return view.render('palavras.lista-palavras', { palavras: palavras.toJSON() })
  }

  async store({request, response}){
    const data = request.only(['nome'])

    const palavra = await Palavra.create(data)
    return response.redirect('back')
  }
}

module.exports = PalavraController
