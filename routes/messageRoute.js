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
    });
});

router.get('/messages',(req,res) =>{
   Message.find().sort({ createdAt: -1})
   .then((result)=>{
    res.render('index',{messages: result});
   })
   .catch((err)=>{
    console.log(err);
   });
});



module.exports = router;