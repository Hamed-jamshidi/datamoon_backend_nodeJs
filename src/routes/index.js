const express = require('express')
const licenseRouter = require('./license')
const router = express.Router()
const creditRouter = require('./credit')
const authRouter = require('./auth')
const userRouter = require('./user')
const adminRouter = require('./admin')


const { isLoggined, isAdmin } = require('../middlewares/auth')
const error = require('./../middlewares/error')
router.use('/auth', authRouter)
router.use('/user',  userRouter)
router.use('/admin', isLoggined, isAdmin, adminRouter)
router.use('/credit', isLoggined,  creditRouter)
router.use('/license', isLoggined, licenseRouter)
router.use(error)
module.exports = router
