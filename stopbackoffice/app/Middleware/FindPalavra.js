
'use strict'
const Palavra = use('App/Models/Palavra')

class FindPalavra {
async handle({ request, response, params: { id } }, next) {
// call next to advance the request
const palavra = await Palavra.find(id)

if (!palavra) {
  return response.status(404).json({
    message: 'palavra not found.',
    id
  })
}

request.body.palavra = palavra

await next()
}
}

module.exports = FindPalavra
