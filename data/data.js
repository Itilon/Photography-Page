const ImagesData = require('./images.data');
const init = (db) => {
    return Promise.resolve({
        images: new ImagesData(db)
    });
};

module.exports = { init };