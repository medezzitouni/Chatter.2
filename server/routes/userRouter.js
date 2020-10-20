import express from 'express'
import { userControllers as ctrls } from '../App/index'


const router = express.Router()


router.route('/')
// getALL users
.get((req, res) => {
    res.status(500).json({
        data: new Error('not implemented yet').stack
    })

    return Promise.reject(new Error('not implemented yet'))
})
// post register (new user)
.post((req, res) => {
    
    ctrls.requestAdapter(req)
    const { headers, statusCode, data } = ctrls.registration()
    res.set(headers)
       .status(statusCode)
       .send(data)
})
// update an existed user
.put((req, res) => {
    res.status(500).json({
        data: new Error('not implemented yet').stack
    })

    return Promise.reject(new Error('not implemented yet'))
})

router.route('/login')
.post(async (req, res) => {
    
    ctrls.requestAdapter(req)
    const { headers, statusCode, data } = await ctrls.login()
    console.log({ headers, statusCode, data })
    res.set(headers)
       .status(statusCode)
       .send(data)

    //! DON'T redirect just send a token, then the frontend should handle the routes based on the token 
    //! for any data the frontend gon' need, it should send the token with request to the backend, this  
    //! last one should verify the user authentication using that token 
    // if(statusCode === 200) res.redirect('/home') 

})

export default router