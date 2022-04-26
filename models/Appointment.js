const mongoose = require('mongoose');

const { Schema } = mongoose;

const AppointmentSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    dentNumber: Number,
    price: Number,
    services: String,
    date: String,
    time: String
},
    {
    timestamps: true
    }
);

const Appointment = mongoose.model('Appointment', AppointmentSchema);

module.exports = Appointment;
