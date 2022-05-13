const express = require('express');
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const  db = require('./core/db');
const { userValidation, appointmentValidation } = require('./utils/validations');
const { UserCtrl, AppointmentCtrl} = require('./controllers');

const app = express();
app.use(express.json({}));
app.use(cors());

//CRUD для Пользователей
app.get('/users', UserCtrl.all);
app.post('/users', userValidation.create, UserCtrl.create);
app.delete('/users/:id', UserCtrl.remove);
app.patch('/users/:id', userValidation.create, UserCtrl.update);
app.get('/users/:id', UserCtrl.show);

//CRUD для Приёмов
app.get('/appointments', AppointmentCtrl.all);
app.post('/appointments', appointmentValidation.create, AppointmentCtrl.create);
app.delete('/appointments/:id', AppointmentCtrl.remove);
app.patch('/appointments/:id', appointmentValidation.update, AppointmentCtrl.update);

app.listen(6666, function (err) {
    if (err) {
        return console.log(err);
    }
    console.log('Server run EEee!');
})