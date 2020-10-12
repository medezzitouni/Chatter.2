

import { UserRepository } from '../../Core/Ports/out/DatabaseService'


export default class UserDatabaseAdapter extends UserRepository{    
    
    constructor(db){
        super()
        _db = db

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