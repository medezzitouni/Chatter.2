import { InternalServerError, 
         RequiredParameterError,
         UniqueConstraintError,
         InvalidPropertyError,
         NotExistError } from './index'



export default function handleKnownErrors(e){
    if(e instanceof RequiredParameterError){
        
        return {
            headers : {
                'Content-Type' : 'application/json'
            },
            statusCode: 400,  // bad request
            data: JSON.stringify(e.message)

        } 
    }
    if(e instanceof InternalServerError){
        return {
            headers : {
                'Content-Type' : 'application/json'
            },
            statusCode: 400,  // bad request
            data: JSON.stringify(e.message)

        } 
    }
    if(e instanceof UniqueConstraintError){
        return {
            headers : {
                'Content-Type' : 'application/json'
            },
            statusCode: 400,  // bad request
            data: JSON.stringify(e.message)

        } 
    }
    if(e instanceof InvalidPropertyError){
        return {
            headers : {
                'Content-Type' : 'application/json'
            },
            statusCode: 400,  // bad request
            data: JSON.stringify(e.message)

        } 
    }
    if(e instanceof NotExistError){
        return {
            headers : {
                'Content-Type' : 'application/json'
            },
            statusCode: 400,  // bad request
            data: JSON.stringify(e.message)

        } 
    }
    console.log("handle function", e.stack)
    return null
}