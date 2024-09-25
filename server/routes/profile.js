const express = require("express");
const { isAuthenticated } = require('./../middleware/jwt.js');

const router = express.Router();

const { getAllProfile, updateProfile } = require("../controller/profile");
router.get('/', isAuthenticated, getAllProfile);
router.put('/', isAuthenticated, updateProfile);

module.exports = router;
