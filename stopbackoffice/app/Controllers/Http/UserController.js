'use strict'

const User = use('App/Models/User');

class UserController {
  async create({ request, response, auth}) {
    const user = await User.create(request.only(['username','email','password']));

    await auth.login(user);
    return response.redirect('/');
  }

  async login({ request, auth, response, session, view }) {


        const { email, password } = request.all();

        try {
            await auth.attempt(email, password);
            return response.redirect('/');
        } catch (error) {
            session.flash({loginError: 'These credentials do not work.'})
            return view.render('auth.login');
        }
    }

    async verifica({auth, response, view}){
        try{
          await auth.check();
          return response.redirect('/temas');
        }catch(error){
          return view.render('auth.login');
        }
      }
}

module.exports = UserController
