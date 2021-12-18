const database = require('../models');

class PessoasController {

    static async getAllPessoas(req, res) {
        try {
            const todasPessoas = await database.Pessoas.findAll();

            return res.status(200).json(todasPessoas);

        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async getByIdPessoas(req, res) {
        try {
            const { idPessoa } = req.params;

            const pessoa = await database.Pessoas.findOne({
                where: {
                    id: Number(idPessoa)
                }
            });

            return res.status(200).json(pessoa);

        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async inserePessoa(req, res) {
        try {
            const novaPessoa = req.body;

            const novaPessoaCriada = await database.Pessoas.create(novaPessoa);

            return res.status(201).json(novaPessoaCriada);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async atualizaPessoa(req, res) {
        try {
            const { idPessoa } = req.params;

            const dadosAtualizar = req.body;

            await database.Pessoas.update(dadosAtualizar, {
                where: {
                    id: Number(idPessoa)
                }
            });

            const pessoaAtualizada = await database.Pessoas.findOne({
                where: {
                    id: Number(idPessoa)
                }
            });

            return res.status(200).send(pessoaAtualizada).end();

        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async deletarPessoa(req, res) {
        try {
            const { idPessoa } = req.params;

            await database.Pessoas.destroy({
                where: {
                    id: Number(idPessoa)
                }
            });

            return res.status(204).end();

        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async getAllMatriculas(req, res) {
        try {
            const { idPessoa } = req.params;

            const todasMatriculas = await database.Matriculas.findAll({
                where: {
                    estudante_id: Number(idPessoa)
                }
            });

            return res.status(200).json(todasMatriculas);

        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async getByIdMatricula(req, res) {
        try {
            const { idPessoa, idMatricula } = req.params;

            const matricula = await database.Matriculas.findOne({
                where: {
                    id: Number(idMatricula),
                    estudante_id: Number(idPessoa)
                }
            });

            return res.status(200).json(matricula);

        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async insereMatricula(req, res) {
        try {
            const { idPessoa } = req.params;

            const novaMatricula = { ...req.body, estudante_id: Number(idPessoa) };

            const novaMatriculaCriada = await database.Matriculas.create(novaMatricula);

            return res.status(201).json(novaMatriculaCriada);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async atualizaMatricula(req, res) {
        try {
            const { idPessoa, idMatricula } = req.params;

            const dadosAtualizar = req.body;

            await database.Matriculas.update(dadosAtualizar, {
                where: {
                    id: Number(idMatricula),
                    estudante_id: Number(idPessoa)
                }
            });

            const matriculaAtualizada = await database.Matriculas.findOne({
                where: {
                    id: Number(idMatricula)
                }
            });

            return res.status(200).send(matriculaAtualizada).end();

        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async deletarMatricula(req, res){
        try {
            const { idPessoa, idMatricula } = req.params;

            await database.Matriculas.destroy({
                where: {
                    id: Number(idMatricula),
                    estudante_id: Number(idPessoa)
                }
            });;

            return res.status(204).end();

        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

}

module.exports = PessoasController;