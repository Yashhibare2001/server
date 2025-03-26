const mongoose = require ("mongoose");

const travel = new mongoose.Schema(
    {
        id:{
            type:Number,
            required:true
        },
        names:{
            type:String,
            required:true
        },
        city:{
            type:String,
            required:true
        },
        Price:{
            type:Number,
            required:true
        },
        Ratings:{
            type:String,
            required:true
        },
        Date:{
            type:String,
            required:true
        },
        type:{
            type:String,
            required:true
        },
        img:{
            type:String,
            required:true
        },
        seats:{
            type:Number,
            required:true
        },
    }
);
module.exports = mongoose.model('travel',travel);