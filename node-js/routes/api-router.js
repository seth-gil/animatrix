const express = require('express');
const router = express.Router();

router.get('/video/:id', (req, res) => {
    res.json({
        param: req.params.id
    });
});

module.exports = router;