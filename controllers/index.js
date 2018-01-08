const init = (data) => {
    const postController = require('./post.controller').init(data);

    const controllers = {
        postController,
    }

    return controllers;
}

module.exports = { init }