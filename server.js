const async = () => {
    return Promise.resolve();
};

const { port, connectionString } = require('./app/config/port.config');

async()
    .then(() => require('./db').init(connectionString))
    .then((db) => require('./data').init(db))
    .then((data) => require('./app').init(data))
    .then((app) => {
        app.listen(port, () => console.log(`Server starts at: ${port}`));
    });
