import createLoginModel from './LoginModel'
import { hashAdapter, sanitizeAdapter } from '../adapters'


const LoginModel = createLoginModel({sanitize: sanitizeAdapter})

export {
    LoginModel
}