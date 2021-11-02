const express = require("express");
const router = express.Router();

const movieRoutes = require("./movieRoutes");

router.use('/movies', movieRoutes);

module.exports = router;