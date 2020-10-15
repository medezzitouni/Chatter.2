import { RequireParam } from '../../../helpers'

export default function createLoginModel({ sanitize= RequireParam('username') }){
    
    return class LoginModel{

        constructor({username = RequireParam('username'), password= RequireParam('password')}){
            
            _username = sanitize(username)
            _password = sanitize(password)
            
            //! getters
            this.username = () => _username
            this.password = () => _password
    
            //! setters
            //  this.setUsername = (username) => {_username = username}
            //  this.setPassword = (password) => {_password = username}
        }


    }
}