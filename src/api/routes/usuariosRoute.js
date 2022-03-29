const { Router } = require('express');
const UsuariosController = require('../controllers/UsuariosController');
const ProdutosController = require('../controllers/ProdutosController');
const {verifyJWT} = require('../controllers/AuthController');

const router = Router();

router.post('/api/usuarios', UsuariosController.inserirUsuario);

router.get('/api/usuarios', verifyJWT, UsuariosController.buscarTodosUsuarios);
router.get('/api/usuarios/:idUsuario', verifyJWT, UsuariosController.buscarUsuario);
router.put('/api/usuarios/:idUsuario', verifyJWT, UsuariosController.atualizarUsuario);
router.delete('/api/usuarios/:idUsuario', verifyJWT, UsuariosController.deletarUsuario);

router.get('/api/usuarios/:idUsuario/produto/', verifyJWT, ProdutosController.buscarTodosProdutos);
router.get('/api/usuarios/:idUsuario/produto/:idProduto', verifyJWT, ProdutosController.buscarProduto);
router.post('/api/usuarios/:idUsuario/produto/', verifyJWT, ProdutosController.inserirProduto);
router.put('/api/usuarios/:idUsuario/produto/:idProduto', verifyJWT, ProdutosController.atualizarProduto);
router.delete('/api/usuarios/:idUsuario/produto/:idProduto', verifyJWT, ProdutosController.deletarProduto);

module.exports = router;