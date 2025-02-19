// index.js
require("dotenv").config();
const http = require("http");
const config = require("./helper/config/config");
const app = require("./app");

// Create HTTP server with Express app
const server = http.createServer(app);

// Start listening on the configured port
server.listen(config.PORT, (err) => {
    if (!err) {
        console.log(`Server started on port : ${config.PORT}\nCtrl + Click to start http://localhost:${config.PORT}/test`);
    } else {
        console.log(`Error while starting server.\nError: ${err}`);
    }
});
