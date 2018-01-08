const port = process.env.port || 3002;
const connectionString = 'mongodb://localhost/photography-db';

module.exports = {
    port,
    connectionString,
}