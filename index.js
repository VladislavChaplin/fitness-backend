const express = require('express');
const cors = require("cors");

const  db = require('./core/db');
const { userValidation, appointmentValidation } = require('./utils/validations');
const { UserCtrl, AppointmentCtrl} = require('./controllers');

const app = express();
app.use(express.json({}));
app.use(cors());

app.get('/users', UserCtrl.all);
app.post('/users', userValidation.create, UserCtrl.create);

app.get('/appointments', AppointmentCtrl.all);
app.post('/appointments', appointmentValidation.create, AppointmentCtrl.create);

app.listen(6666, function (err) {
    if (err) {
        return console.log(err);
    }
    console.log('Server run EEee!');
})