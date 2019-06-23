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
                callback(results);
            }
        );
    },

    updateOne: function (burger, callback) {
        connection.query(
            'UPDATE burgers SET ? WHERE ?',
            [{ devoured: true }, { id: burger.id }],
            (err, results) => {
                console.log(err);
                callback(results);
            }
        );
    }

};