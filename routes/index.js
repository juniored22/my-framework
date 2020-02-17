/*!
 * Routers
 * Copyright(c) 2020-2020 Edgard Junior
 * MIT Licensed
 */

"use strict"
const UserController = require('../App/Controller/UserController');
const GroupController = require('../App/Controller/GroupController');
const encryptPass    = require('../middleware/auth')


module.exports = (app) => {

    app.use(encryptPass);

    app.get('/', function (req, res) {
        res.render('index', { title: 'Hey', message: 'Hello there!' });
    });


    /**
     * Routers HTTP Users
     * @create
     * @find
     * @findAll
     */
    app.get('/find-all/users', UserController.findAllUsers);
    app.get('/find/:user_id/user/', UserController.findUser);
    app.post('/create/user', UserController.createUser);
    app.put('/update/:user_id/user/', UserController.updateUser);

    /**
   * Routers HTTP Users
   * @create
   * @find
   * @findAll
   */
    app.get('/find-all/group', GroupController.findAllGroup);
    app.get('/find/:group_id/group', GroupController.findGroup);
    app.post('/create/group', GroupController.createGroup);
    app.put('/update/:group_id/group/', GroupController.updateGroup);



    /**
     *
     * Existe um método de roteamento especial, app.all(), que não é derivado de nenhum método HTTP.
     * Este método é usado para carregar funções de middleware em um caminho para todos os métodos de solicitação.
     * No exemplo a seguir, o manipulador irá ser executado para solicitações para “/secret” se você estiver usando
     * GET, POST, PUT, DELETE, ou qualquer outro método de solicitação HTTP que é suportado no módulo http.
     *
     */
    app.all('/secret-hash', function (req, res, next) {
        console.log('Accessing the secret section ...');
        res.send('secret');
        next(); // pass control to the next handler
    });


    /**
     * Uma matriz de funções de retorno de chamada podem manipular uma rota.
     * @param {*} req
     * @param {*} res
     * @param {*} next
     */
    var cb0 = function (req, res, next) {
        console.log('CB0');
        next();
    }

    var cb1 = function (req, res, next) {
        console.log('CB1');
        next();
    }

    var cb2 = function (req, res) {
        res.send('Hello from C!');
    }

    app.get('/example/c', [cb0, cb1, cb2]);



    /**
     * É possível criar manipuladores de rota encadeáveis para um caminho de rota usando o app.route().
     * Como o caminho é especificado em uma localização única, criar rotas modulares é útil, já que reduz redundâncias e erros tipográficos.
     * Para obter mais informações sobre rotas, consulte: documentação do Router().
     *
     */
    app.route('/book')
        .get(function (req, res) {
            res.send('Get a random book');
        })
        .post(function (req, res) {

            res.json(req.body)
        })
        .put(function (req, res) {
            res.send('Update the book');
        });


    app.route('/users')
        .get(function (req, res) {
            res.send('Get a random book');
        })
        .post(function (req, res) {
            res.send('Add a book');
        })
        .put(function (req, res) {
            res.send('Update the book');
        });
}
