const database = require('../models');

class NivelController {

    static async getAllNiveis(req, res) {
        try {
            const todosOsNiveis = await database.Niveis.findAll()
            return res.status(200).json(todosOsNiveis)
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async getNivelById(req, res) {
        try {
            const { idNivel } = req.params;

            const nivel = await database.Niveis.findOne({
                where: {
                    id: Number(idNivel)
                }
            });

            return res.status(200).json(nivel);

        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async insereNivel(req, res) {
        try {
            const novoNivel = req.body;

            const novoNivelCriado = await database.Niveis.create(novoNivel);

            return res.status(201).json(novoNivelCriado);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async atualizaNivel(req, res) {
        try {
            const { idNivel } = req.params;

            const dadosAtualizar = req.body;

            await database.Niveis.update(dadosAtualizar, {
                where: {
                    id: Number(idNivel)
                }
            });

            const nivelAtualizado = await database.Niveis.findOne({
                where: {
                    id: Number(idNivel)
                }
            });

            return res.status(200).send(nivelAtualizado).end();

        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async deleteNivel(req, res) {
        try {
            const { idNivel } = req.params;

            await database.Niveis.destroy({
                where: {
                    id: Number(idNivel)
                }
            });

            return res.status(204).end();

        } catch (error) {
            return res.status(500).json(error.message);
        }
    }
}

module.exports = NivelController;