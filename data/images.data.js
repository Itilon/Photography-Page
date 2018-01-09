const Data = require('./base/base.data');
const Image = require('../models/image.model');

class ImagesData extends Data {
    constructor(db) {
        super(db, Image, Image);
    }
}

module.exports = ImagesData;