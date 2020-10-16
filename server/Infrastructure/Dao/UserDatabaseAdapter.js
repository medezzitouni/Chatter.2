

import { UserRepository } from '../../Core/Ports/out/DatabaseService'


export default class UserDatabaseAdapter extends UserRepository{    
    
    constructor(db){
        super()
       let _db = db
        this.db = () => _db
        this.setDB = (db) => {_db = db}

        Object.freeze(this)

    }

    add(userInstance) {
        return Promise.reject(new Error('not implemented'));
    }

    update(userInstance) {
        return Promise.reject(new Error('not implemented'));
    }

    delete(userId) {
        return Promise.reject(new Error('not implemented'));
    }

    getById(userId) {
        // repo.find({username: '', passworod: ''})
        return Promise.reject(new Error('not implemented'));
    }

    getByEmail(email) {
        return Promise.reject(new Error('not implemented'));
    }
    getByUsername(username) {
        return Promise.reject(new Error('not implemented'));
        // return this.db.collection('user').where();
    }

    getAll() {
        return Promise.reject(new Error('not implemented'));
    }
    find(inputs){

        // ! implement it after we've done everything
        // if(Object.keys(inputs).length == 0) this.getAll()
        // if(Object.keys(inputs).length == 1) 
        return Promise.reject(new Error('not implemented'));
    }
    addRoom(userInstance, room) {
        return Promise.reject(new Error('not implemented'));
    }
}