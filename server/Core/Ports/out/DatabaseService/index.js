import UserRepository from './UserRepository'
import MessageRepository from './MessageRepository'
import RoomRepository from './RoomRepository'

import Dao from '../../../../Infrastructure/Dao'


export default function(){
    return new Promise((resolve, reject) => {
        
        if(!(Dao.userDatabaseAdapter instanceof UserRepository))
            reject(new Error("the userDatabaseAdapter doesn't implement the UserRepository"))

        if(!(Dao.roomDatabaseAdapter instanceof RoomRepository))
            reject(new Error("the roomDatabaseAdapter doesn't implement the RoomRepository"))

        if(!(Dao.messageDatabaseAdapter instanceof MessageRepository))
            reject(new Error("the messageDatabaseAdapter doesn't implement the MessageRepository"))

        // asign Repositories
        resolve(Object.freeze({
            userRepository: Dao.userDatabaseAdapter,
            roomRepository: Dao.roomDatabaseAdapter,
            messageRepository: Dao.messageDatabaseAdapter
        }))
    })
}


// export default Object.freeze({
//     userRepository, 
//     roomRepository,
//     messageRepository
// })



// export default (() => {
//     return {
//         DatabaseService: new InMemoryDatabaseServices(),
//         CrmServices: new UniversityCrmServices()
//     };
// })();