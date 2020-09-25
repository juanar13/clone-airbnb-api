const BookingModel = require('./../models/bookingModel')
require('./../connection/connectionDb')

const clientBooking = async(name, phone, email, booking_date, experience_id) => {

    try {
        await BookingModel(name, phone, email, booking_date, experience_id).save()
        return ('guardado exitoso')
    } catch (e){
        console.error(e)
        throw e
    }
}

module.exports = {clientBooking}