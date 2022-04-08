module.exports = (app) => {
    const router = require('express').Router();
    const auth = require('../app/controllers/auth.controller');

    router.get('/login', auth.login);

    app.use('/api/auth', router);
}
