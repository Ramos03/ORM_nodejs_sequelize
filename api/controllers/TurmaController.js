const database = require('../models');

class TurmaController {

    static async getAllTurmas(req, res) {
        try {
            const todasAsTurmas = await database.Turmas.findAll();

            return res.status(200).json(todasAsTurmas);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async getByIdTurmas(req, res) {
        try {
            const { idTurma } = req.params;

            const turma = await database.Turmas.findOne({
                where: {
                    id: Number(idTurma)
                }
            });

            return res.status(200).json(turma);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async insereTurma(req, res) {
        try {
            const novaTurma = req.body;

            const novaTurmaCriada = await database.Turmas.create(novaTurma);

            return res.status(201).json(novaTurmaCriada);

        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async atualizaTurma(req, res) {
        try {
            const { idTurma } = req.params;

            const dadosAtualizar = req.body;

            await database.Turmas.update(dadosAtualizar, {
                where: {
                    id: Number(idTurma)
                }
            });

            const turmaAtualizada = await database.Turmas.findOne({
                where: {
                    id: Number(idTurma)
                }
            });

            return res.status(200).send(turmaAtualizada).end();

        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async apagaTurma(req, res) {
        try {
            const { idTurma } = req.params;

            await database.Turmas.destroy({
                where: {
                    id: Number(idTurma)
                }
            });

            return res.status(204).end();

        } catch (error) {
            return res.status(500).json(error.message);
        }
    }
}

module.exports = TurmaController;