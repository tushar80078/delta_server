const config = require(`../helper/config/config`);


// ---------------------- Import Docs From Content Folder --------------------------
const authDoc = require(`./content/auth.doc`);





// ---------------------- Swagger --------------------------
const swaggerDocument = {
    openapi: "3.0.0",
    info: {
        title: "Delta",
        version: "1.0.0",
        description: "APIs for Delta",
    },
    servers: [
        {
            url: "http://localhost:8888/",
            description: "Local server",
        },
    ],
    // -------- Security definations ---------------
    securityDefinitions: {
        JWT: {
            type: "apiKey",
            name: "Authorization",
            in: "header",
        },
    },
    definations: {
        ...authDoc.definitions,

    },
    paths: {
        ...authDoc.paths,

    },
};

module.exports = swaggerDocument;