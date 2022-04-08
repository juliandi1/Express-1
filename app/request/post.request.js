const { check } = require('express-validator');

exports.validation = [
    check('title', 'Body is required').notEmpty(),
    check('body', 'Title is required').notEmpty(),
    check('published', 'Published is required').notEmpty(),
    check('published', 'Published must be boolean').isBoolean(),
];