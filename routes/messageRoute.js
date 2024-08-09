const express = require('express');
const Message = require('../models/message');

const router = express.Router();

//route to make a new message
router.get('/create',(req,res)=>{
    res.render('create');
})

//route that saves to DB and then redirects
router.post('/add-message',(req,res)=>{
    const message = new Message(req.body);

    message.save()
    .then((result)=>{
        res.redirect('/messages');
    })
    .catch((err)=>{
        console.log(err)
    });
});

//renders
router.get('/messages',(req,res) =>{
   Message.find().sort({ createdAt: -1})
   .then((result)=>{
    res.render('index',{messages: result});
   })
   .catch((err)=>{
    console.log(err);
   });
});

router.get('/', (req, res) => {
    res.redirect('/messages');
});



module.exports = router;