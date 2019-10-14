const { Router } = require('express');
const EmployeeController = require('../controllers/employee.controller');
// const authentication = require('../middlewares/authentication');
const router = Router();

router.post(
    '/',
    EmployeeController.create
);

router.post('/signIn/:site_token', (req, res) => EmployeeController.signInRoute(req, res));
router.post('/signOut/:site_token', (req, res) => EmployeeController.signOutRoute(req, res));

router.get('/', EmployeeController.getData);
router.put(
    '/:id',
    EmployeeController.update
);
router.delete(
    '/:id',
    EmployeeController.delete
);

module.exports = router;
