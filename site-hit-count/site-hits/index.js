import express from 'express';
import redis from 'redis';
import process from 'process';

const app = express();
const redisClient = redis.createClient({ host: 'redis-server', port: 6379 });

const APP_PORT = 8090;

redisClient.on('error', (error) => {
    console.error(error);
});

redisClient.set('hits', 0);

app.use('/', (req, res) => {
    console.log('visited');

    process.exit(0);

    redisClient.get('hits', (error, hits) => {
        res.send(`${hits} visitors till now`);

        redisClient.set('hits', parseInt(hits) + 1);
    });
});

app.listen(APP_PORT, () => {
    console.log(`listening at http://localhost:${APP_PORT}`);
});
