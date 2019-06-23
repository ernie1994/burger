var orm = require('../config/orm');


module.exports = {

    all: function (callback) {
        orm.selectAll(callback);
    },

    create: function (burger_name, callback) {
        orm.insertOne(burger_name, callback);
    },

    update: function (burger, callback) {
        orm.updateOne(burger, callback);
    },

    deleteAll: function (callback) {
        orm.deleteAll(callback);
    }

};