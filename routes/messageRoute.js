const express = require('express');
const Message = require('../models/message');

const router = express.Router();

router.get('/create',(req,res)=>{
    res.render('create');
})

router.post('/add-message',(req,res)=>{
    const message = new Message(req.body);

    message.save()
    .then((result)=>{
        res.redirect('/');
    })
    .catch((err)=>{
        console.log(err)
    });A
});

module.exports = router;