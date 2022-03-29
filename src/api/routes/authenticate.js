const { Router } = require('express');
const AuthController = require('../controllers/AuthController');

const router = Router();

router.post('/api/auth', AuthController.authenticate);


module.exports = router;