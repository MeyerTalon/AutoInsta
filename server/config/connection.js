const mongoose = require('mongoose');
// const { MongoMemoryServer } = require('mongodb-memory-server');

// async function connect() {
//     const mongoServer = await MongoMemoryServer.create();
//     const mongoUri = mongoServer.getUri();
// }

// connect();

mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/autoinsta');


module.exports = mongoose.connection;