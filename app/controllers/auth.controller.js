const jwt = require('jsonwebtoken');

exports.login = (req, res) => {
    const token = jwt.sign('admin', 'MyTokenForAPIRequest');
    res.send({ token });
}