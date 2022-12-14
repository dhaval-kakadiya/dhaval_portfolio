const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const msgSchema = new Schema({
    name : {
        type : String
    },
    email:{
        type : String
    },
    message : {
        type : String
    }
})

const msg = mongoose.model('msg',msgSchema)

module.exports = msg;