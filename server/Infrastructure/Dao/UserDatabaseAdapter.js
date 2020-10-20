import { UserRepository } from '../../Core/Ports/out/DatabaseService'
import { User } from '../../Core/Entities'
import { NotExistError } from '../../helpers/errors'

export default class UserDatabaseAdapter extends UserRepository{    
    
    constructor(db){
        super()
       let _db = db
       let _collection = _db.collection('users') 
       
       this.db = () => _db
       this.setDB = (db) => {_db = db}

       this.collection = () => _collection
       this.setCollection = (collection) => { _collection = collection }

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
        return new Promise(async (res, rej) => {
            
            if(! typeof username == 'string') 
                rej(new Error('username should be a string'))
            
            const snapshot = await this.collection().where('username', '==', username).get()
            
            if(snapshot.empty) 
                rej(new NotExistError('User'))
            
            const docs = snapshot._docs()
            if(docs.length > 1) 
                rej(new Error("this username is used by more than one account, we are sorry we can't let you access"))
            
            const doc = await docs[0]._ref.get()
            // console.log('dataAdapter -> ', doc.id)
            // console.log("length -> ",  user.length, user)
            
            res(new User({id: doc.id, email: "", username: doc.data().username, 
            password: doc.data().password, connected: false, lastConnection: 48, roomsNumber: 15}))
        })

        // return Promise.reject(new Error('not implemented'));
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