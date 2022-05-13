const mongoose = require('mongoose');

const { Schema } = mongoose;

const AppointmentSchema = new Schema({
    dentNumber: Number,
    price: Number,
    services: String,
    date: String,
    time: String,
    user: { type: Schema.Types.ObjectId, ref: 'User' }
},
    {
    timestamps: true
    }
);

const Appointment = mongoose.model('Appointment', AppointmentSchema);

module.exports = Appointment;
