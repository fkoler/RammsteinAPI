const http = require('http');
const mongoose = require('mongoose');

const app = require('./app');

const PORT = process.env.PORT || 3000;

const MONGO_URL = 'mongodb+srv://Fr3nk:T30d0r@cluster1.iznu2ke.mongodb.net/?retryWrites=true&w=majority';

const server = http.createServer(app);

mongoose.connection.once('open', () => {
    console.log('MongoDB connection ready...');
});

mongoose.connection.on('error', (error) => {
    console.error(`Error: ${error}`);
});

async function startServer() {
    await mongoose.connect(MONGO_URL);

    server.listen(PORT, () => {
        console.log(`Server is listening on port: ${PORT}...`);
    });
};

startServer();
