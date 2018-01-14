const ImagesData = require('./images.data');
const PostsData = require('./posts.data');
const init = (db) => {
    return Promise.resolve({
        images: new ImagesData(db),
        posts: new PostsData(db)
    });
};

module.exports = { init };