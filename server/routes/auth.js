const express = require("express");
const router = express.Router();

const { signup, login, authorize } = require("../controller/auth");

router.post('/signup', signup);
router.post('/login', login);
router.get('/verify', authorize);

module.exports = router;
