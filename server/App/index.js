import Facade   from '../Core/Ports/in/Facade'
import { hashAdapter, sanitizeAdapter } from './adapters'


import MessageControllers from './MessageControllers'
import createUserControllers from './UserControllers'
import RoomControllers from './RoomControllers'

const UserControllers = createUserControllers({sanitize : sanitizeAdapter})

const userControllers = new UserControllers(Facade.userFacade)
const messageControllers = new MessageControllers(Facade.messageFacade)
const roomControllers = new RoomControllers(Facade.roomFacade)


export {
    userControllers,
    messageControllers,
    roomControllers
}


export default Object.freeze({
    userControllers,
    messageControllers,
    roomControllers
})


