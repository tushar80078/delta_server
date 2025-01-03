const { PrismaClient } = require("@prisma/client");

let db;

if (!global.db) {
    db = new PrismaClient();
    if (process.env.NODE_ENV !== "production") global.db = db;
} else {
    db = global.db;
}

module.exports = db;
