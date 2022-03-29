const database = require('../models');
require("dotenv").config();
const jwt = require('jsonwebtoken');

class AuthController {

    static async authenticate(req, res) {
        try {
            const { email, password } = req.body;

            const usuario = await database.Usuarios.findOne({
                where: {
                    email: String(email),
                    password: String(password)
                }
            });

            if (usuario !== null) {
                const idUsuario = usuario.id;
                const name = usuario.name;
                const email = usuario.email;

                const token = jwt.sign({ idUsuario, name, email }, process.env.SECRET, {
                    expiresIn: 300000 
                });

                return res.status(200).json({ auth: true, token: token });
            }

            return res.status(400).json({ "message": "Usuario ou senha incorreta" });

        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static verifyJWT(req, res, next) {

        if (!req.headers['authorization']) {
            return res.status(401).json({ message: 'Token não informado' });
        }

        const token = req.headers['authorization'].split(" ")[1];

        if (!token) {
            return res.status(401).json({ message: 'Token não informado' });
        }

        jwt.verify(token, process.env.SECRET, function (err, decoded) {
            if (err) {
                return res.status(500).json({ auth: false, message: err });
            }

            req.userId = decoded.id;
            next();
        });
    }
}

module.exports = AuthController;