const express = require('express');
const router = express.Router()

const msjRoutes = require('./msjRoutes')
const portfolioRoutes = require('./porfolioRoute')

router.use('/',msjRoutes)
router.use('/',portfolioRoutes)

module.exports = router