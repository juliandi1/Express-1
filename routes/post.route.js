const auth = require('../app/middleware/auth');

module.exports =  (app) => {
    const router = require('express').Router();
    const posts = require('../app/controllers/post.controller');
    const request = require('../app/request/post.request');

    router.get('/', auth.jwt, posts.index);
    router.post('/create', auth.jwt, request.validation, posts.create);
    router.get('/show/:id', auth.jwt, posts.show);
    router.put('/update/:id', auth.jwt, request.validation, posts.update);
    router.delete('/delete/:id', auth.jwt, posts.delete);

    app.use('/api/posts', router);
}
