import express from 'express';

const app = express();

app.get('/hello', (req, res, next) => {
    return res.json('Hello')
});

app.listen(8000, () => console.log('Server up and running...'));
