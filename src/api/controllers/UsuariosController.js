const database = require('../models');

class UsuariosController {

    static async buscarTodosUsuarios(req, res) {
        try {
            const todosUsuarios = await database.Usuarios.findAll();

            return res.status(200).json(todosUsuarios);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async buscarUsuario(req, res) {
        try {
            const { idUsuario } = req.params;

            const usuario = await database.Usuarios.findOne({
                where: {
                    id: Number(idUsuario)
                }
            });

            return res.status(200).json(usuario);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async inserirUsuario(req, res) {
        try {
            const novoUsuario = req.body;

            const usuario = await database.Usuarios.findOne({
                where: {
                    email: String(novoUsuario.email)
                }
            });

            if(usuario){
                return res.status(400).send({message: "Usuário já existe!"});
            }

            const novoUsuarioCriado = await database.Usuarios.create(novoUsuario);

            return res.status(201).json(novoUsuarioCriado);

        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async atualizarUsuario(req, res) {
        try {
            const { idUsuario } = req.params;

            const dadosAtualizar = req.body;

            await database.Usuarios.update(dadosAtualizar, {
                where: {
                    id: Number(idUsuario)
                }
            });

            const usuarioAtualizado = await database.Usuarios.findOne({
                where: {
                    id: Number(idUsuario)
                }
            });

            return res.status(200).send(usuarioAtualizado).end();

        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async deletarUsuario(req, res) {
        try {
            const { idUsuario } = req.params;

            await database.Usuarios.destroy({
                where: {
                    id: Number(idUsuario)
                }
            });

            return res.status(204).end();

        } catch (error) {
            return res.status(500).json(error.message);
        }
    }
}

module.exports = UsuariosController;