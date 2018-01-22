const { ObjectID } = require('mongodb');

class Data {
    constructor(db, ModelClass, validator) {
        this.db = db;
        this.ModelClass = ModelClass;
        this.validator = validator;
        this.collectionName = this._getCollectionName();
        this.collection = this.db.collection(this.collectionName);
    }

    getAll() {
        return this.collection.find({})
            .toArray();
    }

    findById(id) {
        return this.collection.findOne({
            _id: new ObjectID(id),
        });
    }

    _getCollectionName() {
        return `${this.ModelClass.name.toLowerCase()}s`;
    }
}

module.exports = Data;