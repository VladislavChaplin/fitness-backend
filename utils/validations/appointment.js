const { body } = require('express-validator');

const validation = {
    create: [
        body('dentNumber').isInt({ min: 1, max: 48 }),
        body('price').isInt({ min: 0, max: 100000 }),
        body('services').isLength({ min: 3, max: 100 }),
        body('date').isLength({ min: 3, max: 50 }),
        body('time').isLength({ min: 3, max: 50 }),
        body('user').isLength({ min: 3, max: 50 }),
    ]
};

module.exports = validation;