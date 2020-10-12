


// this class gonna be extended by the Dao layer
export default class UserRepository{
    
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