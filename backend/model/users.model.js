const knex = require("knex");


const db = knex({
  client: "pg",
  connection: {
    host: "127.0.0.1",
    port: 5432,
    user: "postgres",
    password: "@adt_1198",
    database: "frontend_test",
  },
});

module.exports = db