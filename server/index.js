const express = require('express');
const app = express();

const mongo = require('mongodb');
const client = new mongo.MongoClient('mongodb://localhost:27017', { useUnifiedTopology: true });

const port = 5000;
app.listen(port, () => console.log(`Server started on port ${port}`));

let buildings = null;

client.connect(err => {
    if (err) {
        console.log('błąd połączenia', err);
    } else {
        console.log('połączenie udane!');

        const db = client.db('knights');

        const collection = db.collection('budynki');

        collection.find({}).toArray((err, buildingList) => {
            if (err) {
                console.log('błędne zapytanie');
            } else {
                buildings = buildingList;
                console.log('Lista budynków Knights and Merchants:', buildings);

            }
        });

    }
});


app.get('/api/knights/buildings', (req, res) => {

    res.json(buildings);

})





