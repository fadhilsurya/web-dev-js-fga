const express = require('express')
const router = express.Router()
const { TestUser, TestUserPost } = require('../controller/user.controller')
const { CheckPostReq } = require('../middleware/middleware')


// router.use(PrintSuccess)


router.get('/', TestUser)

router.post('/', CheckPostReq, TestUserPost)


module.exports = router