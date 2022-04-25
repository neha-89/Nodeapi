const mongoose = require('mongoose');

const subservice = new mongoose.Schema({
    service_id: {
        required: true,
        type: Number
    },
    service_1: {
        required: true,
        type: String
    },
    details: {
        type: String
    },
    details_1:{
        type:String
    },
    category_1:{
        type:String
    }, 
    img: {
        type: String    
    }
    
})

module.exports = mongoose.model('sub_services', subservice)