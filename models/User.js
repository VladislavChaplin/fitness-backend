const mongoose = require('mongoose');

const { Schema } = mongoose;

const UserSchema = new Schema({
    id: String,
    fullname: String,
    phone: String
},
    {
    timestamps: true
    }
);

UserSchema.virtual('appointments', {
    ref: 'Appointment',
    localField: '_id',
    foreignField: 'user',
    justOne: false // set true for one-to-one relationship
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
