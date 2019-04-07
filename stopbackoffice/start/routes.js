'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')


Route.on('/signup').render('auth.signup');
Route.post('/signup', 'UserController.create').validator('CreateUser');

Route.get('/logout', async ({ auth, response }) => {
    await auth.logout();
    return response.redirect('/');
});

Route.get('/','UserController.verifica');
Route.post('/', 'UserController.login').validator('LoginUser');

Route.post('/temas', 'TemaController.store').validator("CriarTema");
Route.post('/temas/:id','TemaController.update').validator("CriarTema");
Route.get('/temas','TemaController.home');
Route.get('/novoTema','TemaController.carregarPalavras');
Route.get('/tema/edit/:id', 'TemaController.edit');
Route.get('/tema/delete/:id','TemaController.delete')


Route.get('/palavras','PalavraController.home')
Route.post('/palavra', 'PalavraController.update');
Route.post('/palavras', 'PalavraController.store').validator("CriarPalavra");
Route.get('/palavra/edit/:id', 'PalavraController.edit');
Route.post('/palavra/delete','PalavraController.delete');
