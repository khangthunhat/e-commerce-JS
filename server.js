const app = require('./src/app');
const config = require('./src/config/config.mongodb');

const Port = config.app.port;

// const Port = process.env.DEV_APP_PORT || 8000;

const server = app.listen(Port, () => {
    console.log(`Server is running on port ${Port}`);
})

process.on('SIGINT', () => {
    server.close(() => {
        console.log('Server closed');
        process.exit(0);
    });
})