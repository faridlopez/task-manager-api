const mongoose = require('mongoose')
// const validator = require('validator')

mongoose.connect(process.env.MONGODB_URL,{
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
})

// const User = mongoose.model('User',{
//     name: {
//         type: String,
//         required: true,
//         trim: true
//     },
//     password: {
//         type: String,
//         required: true,
//         trim: true,
//         minlength: 7,
//         validate(value){
//             if(value.toLowerCase().includes('password')){
//                 throw new Error('Password cannot contain "password"')   
//             }
//         }
//     },
//     email: {
//         type: String,
//         required: true,
//         trim: true,
//         lowercase: true,
//         validate(value){
//             if(!validator.isEmail(value)){
//                throw new Error('Email is invalid') 
//             }
//         }
//     },
//     age: {
//         type: Number,
//         default: 0,
//         validate(value){
//             if(value < 0){
//                 throw new Error('Age must be a positive number')
//             }
//         }
//     }
// })

// const me = new User({
//     name: '   Farid   ',
//     email: '  MYEMAIL@me.com  ',
//     password: 'phone098!'
// })

// const me = new User({
//     name: 'Farid',
//     age: 36
// })

// me.save().then(()=>{
//     console.log(me)
// }).catch((error)=>{
//     console.log(error)
// })

// const Task = mongoose.model('Task',{
//     description:{
//         type: String,
//         required: true,
//         trim: true
//     },
//     completed:{
//         type: Boolean,
//         default: false
//     }
// })

// const task = new Task({
//     description: ' Learn Mongoose Library',
//     completed: false
// })

// const task = new Task({
//     description: '   Eat Lunch'
// })

// task.save().then(()=>{
//     console.log(task)
// }).catch((error)=>{
//     console.log(error)
// })