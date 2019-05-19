const express = require('express')
require('./db/mongoose')
const User = require('./models/user')
const Task = require('./models/task')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

app = express()
port = process.env.PORT

// console.log(process.env.PORT)
// console.log(process.env.SENDGRID_API_KEY)

// app.use((req,res,next)=>{

//     if(req.method == 'GET'){
//         res.send('GET requests are disable')
//     }else{
//         next()
//     }

// })

// app.use((req,res,next)=>{

//     res.status(503).send('Site is currently down. Check back soon.')
// })

// const multer = require('multer')
// const upload = multer({
//     dest: 'images',
//     limits:{
//         fileSize: 1000000
//     },
//     fileFilter(req,file,cb){
//         if(!file.originalname.match(/\.(doc|docx)$/)){
//             return cb(new Error('Please upload a Word document'))
//         }

//         cb(undefined,true)

//         // cb(new Error('File must be a PDF'))
//         // cb(undefined,true)
//         // cb(undefined,false)
//     }
// })

// const errorMiddleware = (req,res,next)=>{
//     throw new Error('From my Middleware')
// }

// app.post('/upload', upload.single('upload'),  (req,res)=>{
//     res.send()
// },(error,req,res,next)=>{
//     res.status(400).send({
//         error: error.message
//     })
// })



app.use(express.json())
app.use(userRouter)
app.use(taskRouter)


app.listen(port,()=>{
    console.log('Server is up on port '+port)
})

// const Task = require('../src/models/task')
// const User = require('../src/models/user')

// const main = async () => {
//     // const task = await Task.findById('5ce05ac61fdbc8d76c103703')
//     // await task.populate('owner').execPopulate()
//     // console.log(task.owner)
//     const user = await User.findById('5ce059e7ee1d0e54b30b31e3')
//     await user.populate('tasks').execPopulate()
//     console.log(user.tasks)
// }

// main()



// const pet = {
//     name: 'Hal'
// }

// pet.toJSON = function () {
//     // console.log(this)
//     // return this
//     return {}
// }

// console.log(JSON.stringify(pet))

// const jwt = require('jsonwebtoken')

// const myFunction = async () => {
//     const token = jwt.sign({ _id: 'abc123'},'thisismynewcourse', { expiresIn: '7 days'})
//     console.log(token)

//     const data = jwt.verify(token,'thisismynewcourse')
//     console.log(data)
// }

// myFunction()


// const bcrypt = require('bcryptjs')

// const myFunction = async () => {
//     const password = 'Red12345!'
//     const hashedPassword = await bcrypt.hash(password, 8)

//     console.log(password)
//     console.log(hashedPassword)

//     const isMatch = await bcrypt.compare(password,hashedPassword)
//     console.log(isMatch)
// }

// myFunction()