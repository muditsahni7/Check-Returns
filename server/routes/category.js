const express = require('express');
const router = express.Router();
const { isAuthenticated } = require('./../middleware/jwt.js');

const { addCategory, getCategory, updateCategory, deleteCategory } = require("../controller/category");

router.get('/', isAuthenticated, addCategory);
router.post('/', isAuthenticated, addCategory);
router.get('/:id', isAuthenticated, getCategory);
router.put('/:id', isAuthenticated, updateCategory);
router.delete('/:id', isAuthenticated, deleteCategory);

module.exports = router;
