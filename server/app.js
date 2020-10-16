import express from 'express'
import route from './routes'
import { InternalServerError, 
         InvalidPropertyError,
         RequiredParameterError,
         UniqueConstraintError
   } from './helpers/errors'

const app = express()



// app.use(express.static(path.join(__dirname, 'public')))

app.use(express.json())
.use(express.urlencoded({ extended: true }))
.use(express.json())
.use('/api', route)





// middleware nonexistent 
app.use((req, res, next) =>{
    res.setHeader('content-type', 'text/plain')
    res.status(404).send("WE ARE SORRY, NOTHING FOUND")

})
  
// error-handling middleware

app.use((err, req, res, next) =>{
    console.log("I catch it " + err.stack)
    res.status(500).send("something broke, we are sorry, try later")
})

export default app;








// app.get('/addDoc', async (req, res) =>{
//    const docRef = db.collection('users').doc()
   
//    const doc1 = await docRef.set({
//        usrename: 'med',
//        password: '14785'
//    })

//    if(!doc1){
//         res.status(500)
//         res.json({
//             msg: 'error'
//         })
//    }else {
//         res.status(200)
//         res.json(doc1)
//    }
// })

// app.get('/docs', async (req, res) =>{
//     const snapShot = await db.collection('users').get()
//     const users = await db.collection('users')
//     if(!snapShot){
//         console.log('snapShot empty.......')
//         res.status(500).json({
//             msg: 'err ..'
//         })
//     }
//     else{
        
//         snapShot.forEach(user => {
//             console.log(user.id, " ",  user.data())
//             // users.doc(user.id).collection('messages').doc().set({
//             //     userId : user.id,
//             //     body: 'Hello Guys'
//             // })
//         });
//         res.status(200).json({
//             msg:'naadi'
//         })
//     } 
    
// })

// app.get('/msg', async (req, res) =>{
//     const snapShot = await db.collection('users').get()
//     const users = await db.collection('users')
    

//     if(!snapShot){
//         console.log('snapShot empty.......')
//         res.status(500).json({
//             msg: 'err ..'
//         })
//     }

//     else{
        
//         snapShot.forEach( async user => {
//             console.log(user.id, " ",  user.data())
//             // const messages = await users.doc(user.id).collection('messages').get()
//                 console.log("|\n".repeat(10))
//             // messages.forEach(message => {
//             //     console.log(message.id, " ", message)
//             // })
//             const sub_collections = await users.doc(user.id).listCollections() 
//             sub_collections.forEach( async sub_c => {
//                 console.log(sub_c.parent.id)
//                 const doc_parent = await sub_c.parent.get()
//                 console.log(doc_parent.id, doc_parent.data())
//             })
//         });
//         res.status(200).json({
//             msg:'naadi'
//         })
//     } 
    
// })
