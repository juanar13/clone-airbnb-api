const router = require('express').Router()
const { booking } = require('./../controllers/bookingController')

router.post('/', booking)

module.exports = router