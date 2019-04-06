'use strict'

const Tema = use('App/Models/Tema')
const Palavra = use('App/Models/Palavra')

class TemaController {
  async home({view}){
    const temas = await Tema.query().with('palavras').fetch()
    return view.render('temas.lista-temas', { temas: temas.toJSON() })
  }

  async store({request, response}){
    const {palavras, ...data} = request.only(['nome','descricao','palavras'])

    const tema = await Tema.create(data)
    if(palavras && palavras.length > 0){
      await tema.palavras().attach(palavras)
      await tema.load('palavras')
    }
  }

}
module.exports = TemaController
