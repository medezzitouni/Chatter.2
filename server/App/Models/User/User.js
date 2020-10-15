import { RequireParam } from '../../helpers'



export default class User{
    constructor({id, email= RequireParam('Email'), username= RequireParam('username')
                , connected = RequireParam('connected'), lastConnection = RequireParam('lastConnection'), 
                roomsNumber= RequireParam('roomNumber')}){
 
        _id = id
        _email = email
        _username = username
        _connected = connected
        _lastConnection = lastConnection
        _roomsNumber = roomsNumber

         // gettters
         this.id = () => _id
         this.email =  () => _email
         this.username = () => _username
        //  this.password = () => _password
         this.connected = () =>  _connected
         this.lastConnection = () => _lastConnection
         this.roomsNumber = () => _roomsNumber
     
         // setters
 
        //  this.setEmail =  (email) =>   {_email = email   }
        //  this.setUsername = (username) => {_username = username}
        //  this.setPassword = (password) => {_password = username}
        //  this.setConnected = (connected) =>{_connected = connected}
        //  this.setLastConnection = (lastConnected) => { _lastConnection = lastConnected }
        //  this.setRoomsNumber = (roomsNumber) => { _roomsNumber = roomsNumber}
 
 
         Object.freeze(this)
     
    }
}