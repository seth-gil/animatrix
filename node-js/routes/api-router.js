const express = require('express');
const router = express.Router();

const db = {
    users: [
        { 
            id: "1",
            projects: [
                {
                    name: "My First Project",
                    description: "My first ever Animatrix project",
                    thumbnail: "https://www.wctrib.com/sites/default/files/styles/16x9_620/public/fieldimages/0122/lego-96923822-1a72-11e9-8813-cb9dec761e73_0.jpg?itok=S18NDKeo"
                },
                {
                    name: "Lego Movie",
                    description: "A lego movie about something rather",
                    thumbnail: "https://localtvwjw.files.wordpress.com/2018/11/31224231718_152a54689b_z.jpg?quality=85&strip=all&w=640"
                }
            ]
        }
    ]
}

router.get("/:id/projects", (req, res, next) => {
    
})

router.post("/video/:id", (req, res, next) => {
    res.send(req.params);
    next();
});

router.get("/video/:id", (req, res, next) => {
    res.send(req.params);
    next();
});



module.exports = router;