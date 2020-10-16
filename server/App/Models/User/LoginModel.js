import { RequireParam } from '../../../helpers'

export default function createLoginModel({ sanitize= RequireParam('sanitize') }){
    
    return class LoginModel{

        constructor({username = RequireParam('username'), password= RequireParam('password')}){
            
            let _username = sanitize(username)
            let _password = sanitize(password)
            
            //! getters
            this.username = () => _username
            this.password = () => _password
    
            //! setters
            //  this.setUsername = (username) => {_username = username}
            //  this.setPassword = (password) => {_password = username}
        }


    }
}