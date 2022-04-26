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

const User = mongoose.model('User', UserSchema);

module.exports = User;
