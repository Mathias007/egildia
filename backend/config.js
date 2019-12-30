module.exports = {
    // MONGO CONFIG
    URI_MONGO: process.env.URI_MONGO || "mongodb://localhost:27017/egildia",
    // APP CONFIG
    PORT_LISTEN: process.env.PORT_LISTEN || 5000,
    // JWT CONFIG
    TOKEN_SECRET_JWT:
        process.env.TOKEN_SECRET_JWT || "V)W&z,U[MxQb1X^h@o;(_ITskQg6](",
    // CORS CONFIG
    CORS_ORIGIN: process.env.CORS_ORIGIN || "http://localhost:3000",
    // API CONFIG
    ROUTES: {
        API: "api",
        KNIGHTS: "knights",
        TZAR: "tzar"
    }
};
