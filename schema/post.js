const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    p_name: String,
    place: String,
    area: String,
    nor: Number,
    nob: Number,
    h_nearby: String,
    c_nearby: String,
    o_name: String,
    contact: Number,
    posted_by: String
});


const Post = mongoose.model('posts', postSchema);

module.exports = Post;
