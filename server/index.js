const express = require('express');
const app = express();

const mongo = require('mongodb');
const client = new mongo.MongoClient('mongodb://localhost:27017', { useUnifiedTopology: true });

const port = 5000;
app.listen(port, () => console.log(`Server started on port ${port}`));

let customers = null;

client.connect(err => {
    if (err) {
        console.log('błąd połączenia', err);
    } else {
        console.log('połączenie udane!');

        const db = client.db('test');

        const clients = db.collection('clients');

        // const 
        clients.find({}).toArray((err, clientsList) => {
            if (err) {
                console.log('błędne zapytanie');
            } else {
                customers = clientsList;
                console.log('Klienci:', customers);

            }
        });

        // client.close(); // zamknięcie programu
    }
});


app.get('/api/customers', (req, res) => {

    res.json(customers);

})





