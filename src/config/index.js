module.exports = {
  appName: 'CrimsonCafes',
  port: process.env.PORT,
  tokenSecret: process.env.TOKEN_SECRET,
  tokenLifetime: 2419200,
  db: {
    max_connections: 3,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_DATABASE,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
  },
}
