const express = require('express');
const init = (data) => {
    const app = express();

    require('./config/app-config').configApp(app);

    const controllers = require('../controllers').init(data);
    require('./routers').attachTo(app, controllers);

    app.use((req, res, next) => {
        res.status(404).render('404');
    });

    return Promise.resolve(app);
}

module.exports = { init };