const express = require('express');
const router = express.Router()

const {addMsg} = require('../controllers/msgController')

router.post('/addmsg',addMsg)

module.exports = router