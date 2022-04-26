const { validationResult } = require('express-validator');
const {User} = require('../models');

function UserController() {}

const create = function (req, res) {
    const errors = validationResult(req);
    const data = {
        fullname: req.body.fullname,
        phone: req.body.phone
    };

    if (!errors.isEmpty()) {
        return res.status(422).json({
            success: false,
            message: errors.array()
        });
    }

    User.create(data, function (err, doc) {
        if (err) {
            return res.status(500).json({
                success: false,
                message: err
            });
        }

        res.status(201).json({
            success: true,
            data: doc
        });
    });
};


const all = function(req, res) {
    User.find({}, function(err, docs) {
        if (err) {
            return res.status(500).json({
                success: false,
                message: err
            });
        }

        res.json({
            status: 'success',
            data: docs
        });
    });
}

UserController.prototype = {
    all,
    create
};

module.exports = UserController;