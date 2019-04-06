'use strict'
const Tema = use('App/Models/Tema')

class FindTema {
  async handle({ request, response, params: { id } }, next) {
    const tema = await Tema.find(id)

    if (!tema) {
      return response.status(404).json({
        message: 'tema not found.',
        id
      })
    }

    request.body.tema = tema
    await next()
  }
}

module.exports = FindTema
