const express = require('express');
const router = require('./routes/api-router');

const app = express();
const port = process.env.PORT || 8080;

app.use('/api/v1', router);

// routes go here
app.listen(port, () => {
    console.log(`http://localhost:${port}`)
})