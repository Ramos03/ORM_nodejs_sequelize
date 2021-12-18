const { Router } = require('express')
const TurmaController = require('../controllers/TurmaController')

const router = Router();

router.get('/turmas', TurmaController.getAllTurmas);
router.get('/turmas/:idTurma', TurmaController.getByIdTurmas)
router.post('/turmas', TurmaController.insereTurma)
router.put('/turmas/:idTurma', TurmaController.atualizaTurma)
router.delete('/turmas/:idTurma', TurmaController.apagaTurma)

module.exports = router;