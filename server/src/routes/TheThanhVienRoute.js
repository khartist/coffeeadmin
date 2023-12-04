const express = require('express');
const router = express.Router();
const TheThanhVienController = require('../controllers/TheThanhVienController');

router.post("/create", TheThanhVienController.create);
router.get("/list", TheThanhVienController.showAll);
router.delete("/delete/:id", TheThanhVienController.delete);
router.put("/update/:id", TheThanhVienController.update);
router.get("/list/:id", TheThanhVienController.show)

module.exports = router;