import IUserFacade from './IUserFacade'
import IMessageFacade from './IMessageFacade'
import IRoomFacade from './IRoomFacade'
import { UserFacade, RoomFacade, MessageFacade } from '../../../useCases'

import getRepositories from '../Ports/out/DatabaseService'

export default ( async () => {

    const repo = await getRepositories()
    
    // injection
    const userFacade = UserFacade(repo.userRepository)
    const roomFacade = RoomFacade(repo.roomRepository)
    const messageFacade = MessageFacade(repo.messageRepository)

    if(!( userFacade instanceof IUserFacade ))
        reject(new Error("the userFacade doesn't implement the IUserFacade"))

    if(!( roomFacade instanceof IRoomFacade ))
        reject(new Error("the roomFacade doesn't implement the IRoomFacade"))

    if(!( messageFacade instanceof IMessageFacade ))
        reject(new Error("the messageFacade doesn't implement the IMessageFacade"))

      
    return Object.freeze ({
        userFacade,
        roomFacade,
        messageFacade  
    });
})();

