const { Router } = require('express');
const SiteController = require('../controllers/site.controller');
// const authentication = require('../middlewares/authentication');
const router = Router();

router.post(
    '/',
    SiteController.create
);

router.get('/', SiteController.getData);
router.put(
    '/:id',
    SiteController.updateRoute
);
router.delete(
    '/:id',
    SiteController.delete
);

module.exports = router;
