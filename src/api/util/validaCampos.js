const CampoInvalido = require('../errors/CampoInvalido')

class ValidaCamposProdutos {

    constructor(titulo, descricao, preco, categoria) {
        this.titulo = titulo;
        this.descricao = descricao;
        this.preco = preco;
        this.categoria = categoria;

        this.validar();
    }

    validar() {
        const campos = ['titulo', 'descricao', 'preco', 'categoria'];

        campos.forEach((campo) => {
            const valor = this[campo];
            
            if (typeof valor !== 'string' && typeof valor !== 'number' || valor.length == 0) {
                throw new CampoInvalido(campo);
            }
        });
    }
}

module.exports = ValidaCamposProdutos;
