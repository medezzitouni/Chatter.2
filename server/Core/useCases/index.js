import MessageFacade from './MessageFacade'
import UserFacade from './UserFacade'
import RoomFacade from './RoomFacade'

// import { UserRepository, 
//          RoomRepository, 
//          MessageRepository } from '../Ports/out/DatabaseService'

// const messageFacade = new MassageFacade()
// const userFacade = new UserFacade() 
// const roomFacade = new RoomFacade()
  
export {
    MessageFacade,
    UserFacade,
    RoomFacade
}


export default Object.freeze({
    MessageFacade,
    UserFacade,
    RoomFacade
})