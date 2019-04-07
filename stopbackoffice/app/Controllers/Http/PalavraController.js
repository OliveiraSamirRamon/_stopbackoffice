'use strict'

const Palavra = use('App/Models/Palavra')

class PalavraController {
  async home({view}){
    const palavras = await Palavra.all();

    return view.render('palavras.lista-palavras', { palavras: palavras.toJSON() })
  }

  async store({request, response, session}){
    const data = request.only(['nome'])
    const palavra = await Palavra.findBy('nome', data.nome);

    if(!palavra){
      const palavra = await Palavra.create(data)
      return response.redirect('back')
    }else{
      session.flash({ message: 'Palavra já existe' });
    }
  }

  async edit({ params, response }){
    const palavra = await Palavra.find(params.id);
    return palavra
  }

  async update ({ response, request, session }) {
      const data = request.only(['id','nome']);
      const palavra = await Palavra.find(data.id);
      if(data.nome){
          palavra.nome = request.all().nome;
          await palavra.save();
          return response.redirect('/palavras')
      }
  }

  async delete({request, response}){
    const data = request.only(['nome','id'])
    const palavra = await Palavra.find(data.id)
    await palavra.delete()
    return response.redirect('/palavras')
  }

  async edit({params,request, response}){
    const palavra = await Palavra.find(params.id)
    return palavra
  }


}

module.exports = PalavraController
