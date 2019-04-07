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
    const exist = await Tema.findBy('nome', data.nome)

    if(!exist){
      const tema = await Tema.create(data)
      if(palavras && palavras.length > 0){
        await tema.palavras().attach(palavras)
        await tema.load('palavras')
      }
      return response.redirect('/temas')
    }else {
      session.flash({ message: 'Tema já existe' });
    }
  }

  async update({params,request, response}){
    const tema = await Tema.findOrFail(params.id)
    const {palavras, ...data } = request.only(['nome','descricao','palavras'])

    tema.merge(data)

    await tema.save()
      await tema.palavras().sync(palavras)
      await tema.load('palavras')
    return response.redirect('/temas')
  }

  async carregarPalavras({view}){
    const palavras = await Palavra.all()
    return view.render('temas.novo-tema', { palavras: palavras.toJSON() })
  }

  async edit({params, response, view}){
    const tema = await Tema.findOrFail(params.id)
    const palavras = await Palavra.all()
    return view.render('temas.editar-tema', {tema: tema, palavras: palavras.toJSON()})
  }


  async delete({ response, session, params}){
    const tema = await Tema.find(params.id)
    await tema.delete()
    return response.redirect('/temas')
  }


}
module.exports = TemaController
