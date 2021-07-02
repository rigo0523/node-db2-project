<<<<<<< HEAD
// Update with your config settings.

=======
>>>>>>> ae0ae9e9f60da95fb3c7754c90f7dcbe0b10ac57
module.exports = {
  development: {
    client: "sqlite3",
    connection: {
<<<<<<< HEAD
      filename: "./cars.db3",
    },
    useNullAsDefault: true,
  },
};

//test
=======
      filename: "./database/car-dealer.db3",
    },
    useNullAsDefault: true,
    migrations: {
      directory: "./database/migrations",
    },
    seeds: {
      directory: "./database/seeds",
    },
  },
  pool: {
    afterCreate: (connection, done) => {
      connection.run("PRAGMA foreign_keys = ON", done);
    },
  },
  //testing
  testing: {
    client: "sqlite3",
    useNullAsDefault: true,
    connection: {
      filename: "./database/test.db3",
    },
    migrations: {
      directory: "./database/migrations",
    },
    seeds: {
      directory: "./database/seeds",
    },
    pool: {
      afterCreate: (conn, done) => {
        // runs after a connection is made to the sqlite engine
        conn.run("PRAGMA foreign_keys = ON", done); // turn on FK enforcement
      },
    },
  },
  //heroku  pd
  production: {
    client: "pg",
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: "./database/migrations",
      tableName: "knex_migrations",
    },
    seeds: {
      directory: "./database/seeds",
    },
    pool: {
      min: 2,
      max: 10,
    },
  },
};
>>>>>>> ae0ae9e9f60da95fb3c7754c90f7dcbe0b10ac57
