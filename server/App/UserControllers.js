
import { RequireParam, httpError } from '../helpers'
import { InternalServerError, handleKnownErrors } from '../helpers/errors'


export default function createUserControllers({ 
    sanitize= RequireParam('sanitize')
    // hash= RequireParm('hash')
}){
    return class UserControllers{

        constructor(Facade = RequireParam('Facade'), req = {}){
    
            let _Facade = Facade
            let _httpRequest = {
                path: req.path,
                method: req.method,
                pathParams: req.params,
                queryParams: req.query,
                body: req.body
            }
            
            //! getters
            this.Facade = () => _Facade
            this.httpRequest = () => _httpRequest
            
            //! setters
            this.setFacade = (Facade) => { _Facade = Facade }
            this.setHttpRequest = (httpRequest) => { 
                
                // this just to secure our app
                const keys = ['path', 'method', 'pathParams', 'queryParams', 'body']
                Object.keys(httpRequest).forEach(key => {
                    if(!keys.includes(key))
                        throw new InternalServerError()
                })
                
                _httpRequest = httpRequest 
            
            }
            
            Object.freeze(this)
        }
    
        requestAdapter(req = RequireParam('Request')) {
            // console.log('-> ', req)
            this.setHttpRequest({
                path: req.path,
                method: req.method,
                pathParams: req.params,
                queryParams: req.query,
                body: req.body
              })
        }
            
    
        async login(){
            let userInstance

            try {

                const username = sanitize(this.httpRequest().body.username)    
                userInstance = await this.Facade().getByUsername(username)

                if(userInstance.id)
                return {
                    headers : {
                        'Content-Type' : 'application/json'
                    },
                    statusCode: 200,  // success
                    data: JSON.stringify({
                        success : 'ok',
                        token: 'NOT Implemented Yet'
                    })
    
                }
            } catch (e) {
                const resultat = handleKnownErrors(e)
                if(resultat) return resultat 
                // if there is any other error, just throw it
                throw e
            }
                
        }
        
        registration(){
            
            if(this.httpRequest().body && Object.keys(this.httpRequest().body).length != 0)
                return {
                    headers : {
                        'Content-Type' : 'application/json'
                    },
                    statusCode: 201,  // created
                    data: JSON.stringify(this.httpRequest().body)
    
                } 
            else 
                return httpError({
                    statusCode: 400,
                    errorMessage: `bad request.`
                })
                
        }
        delete(){
            return Promise.reject(new Error('not implemented'));
    
        }
    
        update(){
            return Promise.reject(new Error('not implemented'));
    
        }
    
        getByEmail() {
            return Promise.reject(new Error('not implemented'));
        }
    
        getAll() {
            return Promise.reject(new Error('not implemented'));
        }
    
        addRoom() {
            return Promise.reject(new Error('not implemented'));
        }
    
    }
}