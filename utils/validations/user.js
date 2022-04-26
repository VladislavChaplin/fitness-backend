const { body } = require('express-validator');

const validation = {
    create: [
        body('fullname').isLength({ min: 6 }),
        body('phone').isLength({ min: 11 }),
    ]
};

module.exports = validation;