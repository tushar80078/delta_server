const express = require("express");
const app = express();
const cors = require("cors");
const swaggerUi = require("swagger-ui-express");

app.use(express.json());
app.use(cors());

const errorMiddleware = require("./helper/middlewares/errorMiddlewares");
const routes = require("./routes/allRoutes.routes");
const swaggerDoc = require("./documentation/swagger");

app.use("/swagger", swaggerUi.serve, swaggerUi.setup(swaggerDoc));

app.use("/test", function (req, res, next) {
    res.send(`<html><body><h1>Server Started</h1></body></html>`);
});


app.use("/", routes);

app.use(errorMiddleware);

module.exports = app;
