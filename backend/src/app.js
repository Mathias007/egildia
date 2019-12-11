import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import mongoose from 'mongoose'
import routes from '../routes'
import config from '../config'
import { initializeData } from './seed/user-seeder'

const { URI_MONGO, PORT_LISTEN, CORS_ORIGIN } = config;
// Initialize app 
const app = express();

const corsOptions = {
    origin: CORS_ORIGIN
}

app.use(cors(corsOptions));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));
app.get('/api', (req, res) => {
    res.json({
        message: 'e-Gildia Graczy 2.0 - API. Witamy w kolonii!'
    });
});

// Connect to MongoDB 
mongoose.connect(URI_MONGO, {
    useCreateIndex: true,
    useUnifiedTopology: true,
    useNewUrlParser: true
}).catch(err => console.log('Error: Could not connect to MongoDB.', err));


mongoose.connection.on('connected', () => {
    initializeData()
    console.log('Initialize user')
});
mongoose.connection.on('error', (err) => {
    console.log('Error: Could not connect to MongoDB.', err);
});

// Routes app 
app.use('/', routes);
// Start app 
app.listen(PORT_LISTEN, () => {
    console.log(`e-Gildia 2.0 Backend Server started on port ${PORT_LISTEN}`)
})
