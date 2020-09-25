const mongoose = require('mongoose')
const { Schema } = mongoose

const BookingSchema = new Schema({
    name: String,
    phone: String,
    email: String,
    booking_date: Date,
    experience_id: String
})

const BookingModel = mongoose.model('bookings', BookingSchema)

module.exports = BookingModel