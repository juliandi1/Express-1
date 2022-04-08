const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));
app.listen(port, () => {
    console.log(`Server is running in http://localhost:${port}`);
});

require('./connection/database').connection();

require('./routes/post.route')(app);
require('./routes/auth.route')(app);
