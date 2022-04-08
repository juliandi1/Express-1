const { validationResult } = require('express-validator');
const Post = require('../../app/models/post.model')();

exports.index = (req, res) => {
    Post.find()
        .then(result => {
            res.send(result);
        })
        .catch(error => {
            res.status(500).send({
                message: error.message || 'some error while retreiving posts'
            });
        });
}

const validation = (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).send({ errors: errors.array() });
    }
}

exports.create = (req, res) => {
    validation(req, res);
    const post = new Post({
        title: req.body.title,
        body: req.body.body,
        published: req.body.published ? req.body.published : false
    });
    post.save(post)
        .then(result => {
            res.send(result);
        })
        .catch(error => {
            res.status(409).send({
                message: error.message || 'some error while create post'
            });
        });
}

exports.show = (req, res) => {
    const id = req.params.id;
    Post.findById(id)
        .then(result => {
            res.send(result);
        })
        .catch(error => {
            res.status(409).send({
                message: error.message || 'some error while show post'
            });
        });
}

exports.update = (req, res) => {
    const id = req.params.id;
    Post.findByIdAndUpdate(id, req.body)
        .then(result => {
            if (!result) {
                res.status(404).send({
                    message: 'Post not found'
                });
            } else {
                res.status(200).send({
                    message: 'Post was updated'
                });
            }
        })
        .catch(error => {
            res.status(409).send({
                message: error.message || 'some error while update post'
            });
        });
}

exports.delete = (req, res) => {
    const id = req.params.id;
    Post.findByIdAndRemove(id)
        .then(result => {
            if (!result) {
                res.status(404).send({
                    message: 'Post not found'
                });
            } else {
                res.status(200).send({
                    message: 'Post was deleted'
                });
            }
        })
        .catch(error => {
            res.status(409).send({
                message: error.message || 'some error while delete post'
            });
        });
}