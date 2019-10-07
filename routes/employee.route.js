const { Router } = require('express');
const EmployeeController = require('../controllers/employee.controller');
// const authentication = require('../middlewares/authentication');
const router = Router();

router.post(
    '/',
    EmployeeController.create
);

router.post('/sign/:site_id', (req, res) => EmployeeController.sign(req, res));

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
