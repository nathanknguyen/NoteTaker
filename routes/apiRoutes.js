const db = require('../db/db.json');
const router = require('express').Router();
const fs = require('fs');

// get route
router.get('/notes', (req,res) => res.json(db));
// post route
    
router.post('/notes', (req,res) => {
    const id = Math.floor(Math.random()*10000)
    const title = req.body.title;
    const text = req.body.text;
    const newNotes = {
        id: id,
        title: title,
        text: text
    }
    db.push(newNotes);
    fs.writeFileSync('../db/db.json', JSON.stringify(db))
    res.json(db);
}); 

module.exports = router;