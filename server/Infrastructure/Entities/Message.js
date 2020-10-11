



export default class Messages{

    constructor({id, body, isDeleted, userId, sendingDate}){
        
        _id = id
        _body = body
        _isDeleted = isDeleted
        _userId = userId
        _sendingDate = sendingDate

        // gettters
        this.id = () => _id
        this.isDeleted =  () => _isDeleted
        this.roomChatters = () => _roomChatters
        
        // setters
        this.setIsDeleted =  () =>   { _isDeleted = !isDeleted }
        this.setSendingDate = (sendingDate) => { _sendingDate = sendingDate }

        Object.freeze(this)
    }
}