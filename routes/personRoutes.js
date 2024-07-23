const express = require('express');
const router = express('router');
const { Person } = require('./../models/person');

//get  request
router.get('/person', async(req, res)=>{
    try{
         const data = await Person.find();
         console.log('Fetch data');
         res.status(200).json(data);
       }
     catch(err){
         console.log(err);
         res.status(500).json({error: 'internal server error'});
     }
 });

 //post requests
router.post('/person', async(req , res)=>{
    try{
        const data = req.body;  //first data is saved in body by bodyparser so we first save it to in data
        const newperson = new Person(data);  //then parse the data to the model which is Person
        const response = await newperson.save(); //then save in database here we use await to wait the next process until the data is not saved in db

        console.log('data save successfully');
        res.status(200).json(response);  //it show response to the client side 

    }
    catch(err){
        console.log(err);
        res.status(500).json({error: 'internal server error'});
    }
});

//parameter get request
router.get('/person/:worktype', async(req, res)=>{
    try{
        const worktype = req.params.worktype;
        if(worktype == 'waiter' || worktype == 'cook' || worktype == 'chef'){
            const response = await Person.find({work: worktype});
            console.log('fetch data ');
            res.status(200).json(response);
        }
    }
    catch(err){
        console.log(err);
        res.status(500).json({error: 'internal server error'})
    }
});

//put request
router.put('/:_id', async(req , res)=>{
    try{
        const personId = req.params._id;  //Extract the id from url parameter
        const updatePersonData = req.body; //update the data of the person

        const response = await Person.findByIdAndUpdate(personId , updatePersonData, {
            new:true, //return the updated document
            runValidators:true  //run mongoose validation
        });

        if(!response){
            res.status(404).json({error:'data is not found'})
        }
        console.log('data updated');
        res.status(201).json(response);
    }
    catch(err){
        console.log("internal server error");
        res.status(500).json({error: "internal server error"});

    }
})
module.exports = router;