const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');

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

app.get('/api', cors(corsOptions), (req, res, next) => {
    res.json({
        message: 'e-Gildia Graczy 2.0 - API. Witamy w kolonii!'
    });
});

app.post('/api/posts', verifyToken, (req, res) => {
    jwt.verify(req.token, 'secretkey', (err, authData) => {
        if (err) {
            res.sendStatus(403);
        } else {
            res.json({
                message: 'Post created...',
                authData
            });
        }
    });

});

app.post('/api/login', (req, res) => {
    // Mock user
    const user = {
        id: 1,
        username: 'Mathias',
        email: 'mathias.najlepszy@gmail.com',
        password: 'Testowe123'
    }

    jwt.sign({ user: user }, 'secretkey', (err, token) => {
        res.json({
            token: token
        });
    });
});

// FORMAT OF TOKEN
// Authorization: Bearer <acces_token>

// Verify Token
function verifyToken(req, res, next) {
    // Get auth header value
    const bearerHeader = req.headers['authorization'];
    // Check if bearer is undefined
    if (typeof bearerHeader !== 'undefined') {
        // Split at the space
        const bearer = bearerHeader.split(' ')
        // Get token from array
        const bearerToken = bearer[1];
        // Set the token
        req.token = bearerToken;
        // Next middleware
        next();
    } else {
        // Forbidden
        res.sendStatus(403);
    }
}

app.get('/api/knights/buildings', cors(corsOptions), (req, res, next) => {
    res.json(buildings);
});

app.get('/api/knights/units', cors(corsOptions), (req, res, next) => {
    res.json(units);
});
