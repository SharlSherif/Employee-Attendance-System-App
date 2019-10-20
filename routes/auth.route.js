const { Router } = require('express');
const AuthController = require('../controllers/auth.controller');
// const authentication = require('../middlewares/authentication');
const router = Router();

router.post('/', (req, res) => AuthController.login(req, res));

module.exports = router;