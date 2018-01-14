const Data = require('./base/base.data');
const Post = require('../models/post.model');

class PostsData extends Data {
    constructor(db) {
        super(db, Post, Post);
    }
}

module.exports = PostsData;