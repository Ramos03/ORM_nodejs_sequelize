const { Router } = require('express');
const NivelController = require('../controllers/NivelController');

const router = Router();

router.get('/niveis', NivelController.getAllNiveis);
router.get('/niveis/:idNivel', NivelController.getNivelById);
router.post('/niveis', NivelController.insereNivel);
router.put('/niveis/:idNivel', NivelController.atualizaNivel);
router.delete('/niveis/:idNivel', NivelController.deleteNivel);

module.exports = router