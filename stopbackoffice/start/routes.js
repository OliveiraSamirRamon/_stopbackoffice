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


Route.get('/temas','TemaController.home')
Route.on('/novoTema').render('temas.novo-tema').middleware('auth');

Route.get('/palavras','PalavraController.home').middleware('auth');
Route.post('/palavras', 'PalavraController.store');
Route.post('/temas', 'TemaController.store');
