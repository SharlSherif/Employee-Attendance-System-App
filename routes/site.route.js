const { Router } = require('express');
const SiteController = require('../controllers/site.controller');
const { encode } = require('../helpers/jwt')
// const authentication = require('../middlewares/authentication');
const router = Router();

router.post(
    '/',
    SiteController.create
);

router.get('/', SiteController.getData);
//! test the concept of an encrypted site object
router.get('/test', (req, res) => {
    site = {
        "_id": "5d97bd6ae949684a38a529b8", "createdAt": "04-10-2019 11:44:20",
        "isDeleted": false, "name": "Secondary Office",
        "location": { "lat": "300", "lang": "250" }
    }

    res.status(200).send({token:encode(JSON.stringify(site))})
})
router.put(
    '/:id',
    SiteController.updateRoute
);
router.delete(
    '/:id',
    SiteController.delete
);

module.exports = router;
