const { PrismaClient } = require("@prisma/client");

/** @type {PrismaClient} */
let db;

if (!global.db) {
    global.db = new PrismaClient();
}
db = global.db;

module.exports = db;
