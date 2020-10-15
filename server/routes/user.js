import express from 'express'
import { userControllers as ctrls } from '../App/index'


const router = express.Router()


router.route('/')
.post((req, res) => {
    
    ctrls.requestAdapter(req)
    const { headers, statusCode, data } = ctrls.add()
    res.set(headers)
       .status(statusCode)
       .send(data)
})
.put()
export default router