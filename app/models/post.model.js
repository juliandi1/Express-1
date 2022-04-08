const mongoose = require('mongoose');

module.exports = () => {
    const schema = mongoose.Schema(
        {
            title: String,
            body: String,
            published: Boolean
        },
        {
            timestamp: true
        }
    );
    schema.method('toJSON', function () {
        const { __v, _id, ...object } = this.toObject();
        object.id = _id;
        return object;
    });
    const Post = mongoose.model('posts', schema);
    return Post;
};