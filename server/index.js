const express = require('express');
const cors = require('cors')
const app = express();

const corsOptions = {
    origin: 'http://localhost:3000'
}
app.use(cors(corsOptions));

const mongo = require('mongodb');
const client = new mongo.MongoClient('mongodb://localhost:27017', { useUnifiedTopology: true });

const port = 5000;
app.listen(port, () => console.log(`Server started on port ${port}`));

let buildings = null;
let units = null;

client.connect(err => {
    if (err) {
        console.log('błąd połączenia', err);
    } else {
        console.log('połączenie udane!');

        const knightsDatabase = client.db('knights');

        const buildingsCollection = knightsDatabase.collection('budynki');

        buildingsCollection.find({}).toArray((err, buildingList) => {
            if (err) {
                console.log('kolekcja budynków <-> błędne zapytanie');
            } else {
                buildings = buildingList;
                console.log('Lista budynków Knights and Merchants:', buildings);

            }
        });

        const unitsCollection = knightsDatabase.collection('jednostki');

        unitsCollection.find({}).toArray((err, unitsList) => {
            if (err) {
                console.log('kolekcja jednostek <-> błędne zapytanie');
            } else {
                units = unitsList;
                console.log('Lista jednostek Knights and Merchants:', units);
            }
        })

    }
});



app.get('/api/knights/buildings', cors(corsOptions), (req, res, next) => {
    res.json(buildings);
})

app.get('/api/knights/units', cors(corsOptions), (req, res, next) => {
    res.json(units);
})
