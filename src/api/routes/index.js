const bodyParser = require('body-parser');
const usuarios = require('./usuariosRoute');
const auth = require('./authenticate');

module.exports = app => {
    app.use(
        bodyParser.json(),
        auth,
        usuarios
    );
};