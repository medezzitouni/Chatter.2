import { IUserFacade  } from '../Ports/in/Facade'



export default class UserFacade extends IUserFacade{ 
    
    constructor(userRepository){
        let _userRepository = userRepository

        this.userRepository = () => _userRepository
        this.setUserRepository = (userRepository) => { _userRepository = userRepository }
 
        Object.freeze(this)
    }

    add(userInstance) {
        return Promise.reject(new Error('not implemented'));
    }

    update(userInstance) {
        return Promise.reject(new Error('not implemented'));
    }

    delete(userInstance) {
        return Promise.reject(new Error('not implemented'));
    }

    getById(userId) {
        return Promise.reject(new Error('not implemented'));
    }

    getByEmail(userId) {
        return Promise.reject(new Error('not implemented'));
    }

    getAll() {
        return Promise.reject(new Error('not implemented'));
    }

    addRoom(userInstance, room) {
        return Promise.reject(new Error('not implemented'));
    }
}