const jwt = require('jsonwebtoken');

exports.jwt = (req, res, next) => {
    const token = req.header('Authorization');
    if (!token) {
        res.status(401).send({
            message: 'You need token for this request'
        });
    } else {
        try {
            const verify = jwt.verify(token, 'MyTokenForAPIRequest');
            req.user = verify;
            next();
        } catch (error) {
            res.status(401).send({
                message: 'You token is invalid'
            });
        }
    }
}