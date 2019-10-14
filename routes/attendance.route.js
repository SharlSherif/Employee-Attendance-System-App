const { Router } = require('express');
const AttendanceController = require('../controllers/attendance.controller');
// const authentication = require('../middlewares/authentication');
const router = Router();

router.get('/', AttendanceController.getData);
router.get('/:site_token', AttendanceController.getEmpAttendance);

router.put(
    '/:id',
    AttendanceController.update
);
router.delete(
    '/:id',
    AttendanceController.delete
);

module.exports = router;
