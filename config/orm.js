var connection = require('./connection');

module.exports = {

    selectAll: function (callback) {
        connection.query(
            'SELECT * FROM burgers',
            (err, results) => {
                callback(results);
            }
        );
    },

    insertOne: function (burger_name, callback) {
        connection.query(
            'INSERT INTO burgers (burger_name) VALUES (?)',
            (burger_name),
            (err, results) => {
                if (err) return console.log(err);
                callback(results);
            }
        );
    },

    updateOne: function (burger, callback) {
        connection.query(
            'UPDATE burgers SET ? WHERE ?',
            [{ devoured: true }, { id: burger.id }],
            (err, results) => {
                if (err) return console.log(err);
                callback(results);
            }
        );
    },

    deleteAll: function (callback) {
        connection.query(
            'DELETE FROM burgers',
            (err, results) => {
                if (err) return console.log(err);
                callback(results);
            }
        );
    }

};