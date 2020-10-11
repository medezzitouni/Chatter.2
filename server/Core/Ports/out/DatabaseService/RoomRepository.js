



// this class gonna be extended by the Dao layer
export default class RoomRepository{

    constructor() { }

    
    add(roomInstance) {
        return Promise.reject(new Error('not implemented'));
    }

    update(roomInstance) {
        return Promise.reject(new Error('not implemented'));
    }

    delete(roomInstance) {
        return Promise.reject(new Error('not implemented'));
    }

    getById(roomId) {
        return Promise.reject(new Error('not implemented'));
    }

    getAll() {
        return Promise.reject(new Error('not implemented'));
    }

    addUser(userInstance, user) {
        return Promise.reject(new Error('not implemented'));
    }

}