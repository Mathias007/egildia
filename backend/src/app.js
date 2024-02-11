import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";

// import routes & config files
import routes from "../routes";
import config from "./config/config";
import routesPaths from "./config/routesPaths";

// import seeders
import { initializeUsersData } from "./seed/user-seeder";
import { initializeArticlesData } from "./seed/article-seeder";
import { initializeNewsData } from "./seed/news-seeder";

const { URI_MONGO, PORT_LISTEN, CORS_ORIGIN } = config;
const { API } = routesPaths;

// Initialize app
const app = express();

const corsOptions = {
    origin: CORS_ORIGIN
};

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.get(API, (req, res) => {
    res.json({
        message: "e-Gildia Graczy 2.0 - API. Witamy w kolonii!"
    });
});

// Connect to MongoDB
mongoose
    .connect(URI_MONGO, {
        // useCreateIndex: true,
        // useUnifiedTopology: true,
        // useNewUrlParser: true
    })
    .catch(err => console.log("Error: Could not connect to MongoDB.", err));

mongoose.connection.on("connected", () => {
    initializeUsersData();
    console.log("Initialize user");
    initializeArticlesData();
    console.log("Initialize article");
    initializeNewsData();
    console.log("Initialize news");
});
mongoose.connection.on("error", err => {
    console.log("Error: Could not connect to MongoDB.", err);
});

// Routes app
app.use("/", routes);
// Start app
app.listen(PORT_LISTEN, () => {
    console.log(`e-Gildia 2.0 Backend Server started on port ${PORT_LISTEN}`);
});
