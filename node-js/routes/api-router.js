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

router.post("/video/:id", async (req, res, next) => {
    try {
        const dir = req.params.id;
        let error = [], resp = [], images;

        if (!fs.existsSync(dir)){
            fs.mkdirSync(dir);
        } 

        if (Object.keys(req.files).length == 0) {
            error.push("No files were uploaded.");
        }
    
        // The name of the input field (i.e. "images") is used to retrieve the uploaded file
        if(req.files.images) images = req.files.images;
    
        // Use the mv() method to place the file somewhere on your server
        let index = 0;
        images.forEach(function(image) {
            image.mv(`./${dir}/${index++}.jpg`, function(ex) {
                resp.push("File uploaded!");
    
                if(ex) error.push(ex);
            });    
        })  

        createVideo(req, res, error);
        res.send("Process complete.");
        next();
    } catch(err) {
        next(err);
    }
});

router.get("/video/:id", (req, res) => {
    res.json({
        param: req.params.id
    });
});



module.exports = router;