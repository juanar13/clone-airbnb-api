const { clientBooking } = require('./../bussinesLogic/clientBooking')

const booking = async (req, res) => { 

    const model = {
        name: req.body.name,
        phone: req.body.phone,
        email: req.body.email, 
        booking_date: req.body.booking_date, 
        experience_id: req.body.experience_id
    }
    
    try {
        const response = await clientBooking(model)
        res.json(response)
    } catch (error) {
        res.status(500).send(error)
    }   
}

module.exports={
    booking
}