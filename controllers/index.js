const UserController = require('./UserController');
const AppointmentController = require('./AppointmentController');


module.exports = {
    UserCtrl: new UserController(),
    AppointmentCtrl: new AppointmentController()
};