const express = require('express');
const router = express.Router();
const PythonShell = require('python-shell').PythonShell;
const fileUpload = require('express-fileupload');
const fs = require("fs");
var util = require('util')

router.use(fileUpload());

function createVideo(req, res, error) {
    const options = {
        args: [req.params.id, `${req.params.id}.avi`]
    };
    
    PythonShell.run('../python/animator.py', options, function (err, results) {
        if (err) throw err;
        console.log('results: %j', results);

        //res.send(`${results}, ${error}`);
        return results;
    });
}

router.post("/video/:id", (req, res, next) => {
    res.send(req.params);
    next();
});

router.get("/video/:id", (req, res, next) => {
    res.send(req.params);
    next();
});



module.exports = router;