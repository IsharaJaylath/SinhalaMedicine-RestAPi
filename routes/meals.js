const express = require ('express');
const router = express.Router();
const meal =require('../models/meal');


//getting all recipe
router.get('/', async (req,res) =>{
  try {
      const meals = await meal.find()
      res.json(meals)
  } catch (error) {
      res.status(500).json({message: error.message})
  }
})

//getting One
//router.get('/:id',getMeal,(req,res) =>{
  //  res.send(req.meal.title);
//})
router.get('/:Id', async(req,res) =>{
    try{
    const meals = await meal.findById(req.params.Id);
    res.json(meals);
    }
    catch(err){
        res.json({message: err});
    }
});


//creating one
router.post('/', async (req,res) =>{
    const meals = new meal({
    title :req.body.title,
    ingrediants: req.body.ingrediants,
    description: req.body.description
    })
    try {
        const newMeal = await meals.save()
        res.status(201).json(newMeal)
    } catch (error) {
        res.status(400).json({message: error.message})
    }
})


//updating one
router.patch('/:id',(req,res) =>{
    
})


//Delete one
router.patch('/:id',(req,res) =>{
    
})








module.exports = router;
