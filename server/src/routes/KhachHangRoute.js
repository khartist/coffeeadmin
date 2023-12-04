const express = require('express');
const router = express.router();
const KhachHangController = require('../controllers/KhachHangController');

router.post('/', KhachHangController.create);
router.get('/list', KhachHangController.showAll);
router.delete('/delete/:id', KhachHangController.delete);
router.put('/update/:id', KhachHangController.update);
router.get('/list/:id', KhachHangController.show)

module.exports = router;