const database = require('../models');
const ValidarCamposProdutos = require('../util/validaCampos');

class ProdutosController {

    static async buscarTodosProdutos(req, res) {
        try {
            const todosProdutos = await database.Produtos.findAll();

            return res.status(200).json(todosProdutos);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async buscarProduto(req, res) {
        try {
            const { idProduto } = req.params;

            const produto = await database.Produtos.findOne({
                where: {
                    id: Number(idProduto)
                }
            });

            return res.status(200).json(produto);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async inserirProduto(req, res) {
        try {
            const { titulo, descricao, preco, categoria } = req.body;

            const camposValidos = new ValidarCamposProdutos(titulo, descricao, preco, categoria);

            const novoProdutoCriado = await database.Produtos.create({titulo, descricao, preco, categoria});

            return res.status(201).json(novoProdutoCriado);

        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async atualizarProduto(req, res) {
        try {
            const { idProduto } = req.params;

            const dadosAtualizar = req.body;

            await database.Produtos.update(dadosAtualizar, {
                where: {
                    id: Number(idProduto)
                }
            });

            const produtoAtualizado = await database.Produtos.findOne({
                where: {
                    id: Number(idProduto)
                }
            });

            return res.status(200).send(produtoAtualizado).end();

        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async deletarProduto(req, res) {
        try {
            const { idProduto } = req.params;

            await database.Produtos.destroy({
                where: {
                    id: Number(idProduto)
                }
            });

            return res.status(204).end();

        } catch (error) {
            return res.status(500).json(error.message);
        }
    }
}

module.exports = ProdutosController;