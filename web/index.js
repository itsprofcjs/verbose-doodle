import express from 'express';

const app = express();

const APP_PORT = 8080;

app.get('/', (req, res) => {
    console.log('req', req.host);

    res.send('Hi CJS!');
});

app.listen(APP_PORT, () => {
    console.log(`listening on http://localhost:${APP_PORT}`);
});
