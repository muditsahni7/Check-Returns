const express = require('express');
const router = express.Router();
const { isAuthenticated } = require('./../middleware/jwt.js');

const { getAllExpense, addExpense, getExpense, updateExpense, deleteExpense } = require("../controller/expense");

router.get('/', isAuthenticated, getAllExpense);
router.post('/', isAuthenticated, addExpense);
router.get('/:id', isAuthenticated, getExpense);
router.put('/:id', isAuthenticated, updateExpense);
router.delete('/:id', isAuthenticated, deleteExpense);

module.exports = router;
