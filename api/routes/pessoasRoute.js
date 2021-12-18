const { Router } = require('express');
const PessoasController = require('../controllers/PessoasController');

const router = Router();

router.get('/pessoas', PessoasController.getAllPessoas);
router.get('/pessoas/:idPessoa', PessoasController.getByIdPessoas);
router.post('/pessoas', PessoasController.inserePessoa);
router.put('/pessoas/:idPessoa', PessoasController.atualizaPessoa);
router.delete('/pessoas/:idPessoa', PessoasController.deletarPessoa);

/** Maticulas */
router.get('/pessoas/:idPessoa/matricula/', PessoasController.getAllMatriculas);
router.get('/pessoas/:idPessoa/matricula/:idMatricula', PessoasController.getByIdMatricula);
router.post('/pessoas/:idPessoa/matricula/', PessoasController.insereMatricula);
router.put('/pessoas/:idPessoa/matricula/:idMatricula', PessoasController.atualizaMatricula);
router.delete('/pessoas/:idPessoa/matricula/:idMatricula', PessoasController.deletarMatricula);

module.exports = router;