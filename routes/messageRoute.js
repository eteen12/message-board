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
   Message.find().sort({ createdAt: -1})//-1 means decending order...
   .then((result)=>{
    res.render('index',{messages: result});
   })
   .catch((err)=>{
    console.log(err);
   });
});

//to get message by this specific id
router.get('/messages/:id',(req,res)=>{
    const id = req.params.id;
    Message.findById(id)
    .then((result)=>{
        res.render('viewMessage',{message: result});
    })
    .catch((err)=>{
        console.log(err);
    });
});

//automatically redirects from the localhost straight to messages
router.get('/', (req, res) => {
    res.redirect('/messages');
});

//route to delete a message
router.delete('/messages/:id',(req,res) =>{
    const id = req.params.id;

    Message.findByIdAndDelete(id)
    .then((result) =>{
        res.json({redirect: '/'});
    })
    .catch((err)=>{
        console.log(err);
    })
})



module.exports = router;