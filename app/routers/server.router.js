const { Router } = require('express');

const attachTo = (app, controllers) => {
    const router = new Router;

    const postController = controllers.postController;

    router
        .get('/', postController.getHome)

        .get('/about', postController.getAbout)

        .get('/portfolio', postController.getPortfolio)

        .get('/blog', postController.getBlog)

        .get('/contact', postController.getContact);

    app.use('/', router);
};

module.exports = { attachTo };