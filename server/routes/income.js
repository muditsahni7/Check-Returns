const express = require('express');
const router = express.Router();
const { isAuthenticated } = require('./../middleware/jwt.js');

const { getAllIncome, addIncome, getIncome, updateIncome, deleteIncome } = require("../controller/income");
router.get('/', isAuthenticated, getAllIncome);
router.post('/', isAuthenticated, addIncome);
router.get('/:id', isAuthenticated, getIncome);
router.put('/:id', isAuthenticated, updateIncome);
router.delete('/:id', isAuthenticated, deleteIncome);

module.exports = router;
