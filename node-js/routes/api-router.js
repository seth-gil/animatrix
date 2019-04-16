import express from 'express';
const apiRouter = express.Router();

apiRouter.get('/api/v1/video/:id', (req, res) => {
    res.send(req.params())
});