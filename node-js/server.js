import express from 'express';
import bookRouter from './routes/api-router';

const app = express();
const port = process.env.PORT || 8080;

app.use('/api/Books', bookRouter);

// routes go here
app.listen(port, () => {
    console.log(`http://localhost:${port}`)
})