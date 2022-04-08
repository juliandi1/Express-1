const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

exports.connection = () => {
    const url = 'mongodb://localhost:27017/first_collection';

    mongoose.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopoLogy: true
    })
    .then(() => {
        console.log('Database connected!');
    })
    .catch((error) => {
        console.log(`Failed connection to database : ${error}`);
        process.exit();
    });
}
