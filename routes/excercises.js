const router=require('express').Router()
let Excercise=require('../models/excerciseModel')

router.route('/').get((req,res)=>{
    Excercise.find()
    .then(excercises=>res.json(excercises))
    .catch(err=>res.status(400).json('ERROR'+err))
})

router.route('/add').post((req,res)=>{

    console.log(req.body);

    const username=req.body.username;
    const description=req.body.description;
    const activity = req.body.activity;
    const duration=Number(req.body.duration);
    const date=Date.parse(req.body.date)

   const newExcercise= new Excercise({
    username,
    description,
    activity,
    duration,
    date
   })

    newExcercise.save()
    .then(()=>res.json('user added!'))
    .catch(err=>res.status(400).json('ERROR'+err))
})

router.route('/:id').get((req,res)=>{
    Excercise.findById(req.params.id)
    .then(excercise=>res.json(excercise))
    .catch(err=>res.status(400).json('ERROR'+err))
})

router.route('/:id').delete((req,res)=>{
    console.log(req.params.id);
    Excercise.findByIdAndDelete(req.params.id)
    .then(()=>res.json('Deleted Excercise'))
    .catch(err=>res.status(400).json('ERROR'+err))
})

router.route('/update/:id').post((req,res)=>{
    Excercise.findById(req.params.id)
    .then(excercise=>{
        excercise.username=req.body.username
        excercise.description=req.body.description
        excercise.activity=req.body.activity
        excercise.duration=Number(req.body.duration)
        excercise.date=Date.parse(req.body.date)
      


        excercise.save()
        .then(()=>res.json('Excercise Updated'))
        .catch(err=>res.status(400).json('ERROR'+err))
    })
    .catch(err=>res.status(400).json('ERROR'+err))
    
})


module.exports=router;