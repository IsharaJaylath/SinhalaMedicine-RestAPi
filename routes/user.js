const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
 
    email: {
        type: String,
        required: true,
        unique: true,
        match:/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/

    },
    password:{
        type: String,
        required: true
    }
})


module.exports = mongoose.model('user',userSchema);