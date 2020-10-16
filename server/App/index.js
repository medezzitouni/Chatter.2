import Facade   from '../Core/Ports/in/Facade'


import MessageControllers from './MessageControllers'
import UserControllers from './UserControllers'
import RoomControllers from './RoomControllers'

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


