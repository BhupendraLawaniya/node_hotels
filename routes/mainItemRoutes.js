const express = require('express');
const router = express('router');
const { MainItem } = require('./../models/mainItem');

//post request mainitem
router.post('/item', async(req , res)=>{
    try{
        const data = req.body;
        const itemdetail = new MainItem(data);
        const response = await itemdetail.save();

        console.log("item save successfully");
        res.status(200).json(response);
    }
    catch(err){
        console.log(err);
        res.status(500).json({error: 'internal server error'});
    }
});

//update request

router.put('/item/:_id', async(req , res) => {
    try{
        const itemid = req.params._id;
        const updateitemdata = req.body;

        const response = await MainItem.findByIdAndUpdate(itemid , updateitemdata , {
            new:true,
            runValidators:true
        });
        if(!response){
            res.status(406).json({error:'data is not found'})
        }
        console.log('data changed');
        res.status(201).json(response);
    }
    catch(err){
        console.log(err);
        res.status(500).json({error: 'internal server error'});
    }
})

module.exports = router;