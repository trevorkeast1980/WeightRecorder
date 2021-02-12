const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')

const adapter = new FileSync('../db.json')
const mydb = low(adapter)

// Set some defaults (required if your JSON file is empty)
mydb.defaults({ weights: [] })
    .write()

module.exports = function (app) {

    app.put('/weights', (req, res) => {
        mydb.get('weights')
            .push(req.body)
            .write()
        res.send(mydb.get('weights').value());
    });

    app.get('/weights', (req, res) => {
        console.log('get');
        res.send(mydb.get('weights').value());
    })

    app.delete('/weights', (req, res) => {
        mydb.get('weights')
            .remove(req.body)
            .write();

        res.send(mydb.get('weights').value());
    })

    app.post('/weights', (req, res) => {
        mydb.get('weights')
            .find({ date: req.query.date })
            .assign({ weight: req.query.weight })
            .write();

        res.send(mydb.get('weights').value());
    });

};