const mongoose = require('mongoose');

const mealSchema = new mongoose.Schema({
    title: {
       type: String,
       required: true
    },
    ingrediants: {
        type: Array,
        required: true

    },
    description:{
        type: String,
        required: true
    }
})




module.exports = mongoose.model('meal',mealSchema);

