const express = require('express');
const Message = require('../models/message');

const router = express.Router();

router.post('/add-message',(req,res)=>{
    const message = new Message(req.body);

    message.save()
    .then((result)=>{
        res.redirect('/');
    })
    .catch((err)=>{
        console.log(err)
    });
});

module.exports = router;