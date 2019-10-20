const { Router } = require('express');
const CompanyController = require('../controllers/company.controller');
// const authentication = require('../middlewares/authentication');
const router = Router();

router.post('/', CompanyController.create);

router.get('/', CompanyController.getData);

router.get('/:code', CompanyController.getOne);

router.put(
    '/:id',
    CompanyController.update
);
router.delete(
    '/:id',
    CompanyController.delete
);

module.exports = router;
