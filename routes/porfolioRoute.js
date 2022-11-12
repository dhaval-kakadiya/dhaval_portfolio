const express = require('express');
const router = express.Router()

const {portfolio} = require('../controllers/portfolioController')

router.post('/portfolio',portfolio)

module.exports = router