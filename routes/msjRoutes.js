const express = require('express');
const router = express.Router()

const {addMsg} = require('../controllers/msgController')

router.post('/',addMsg)

module.exports = router