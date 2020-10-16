const admin = require('firebase-admin')
const serviceAccountKey = require('./ServiceAccountKey.json')
import connection from './db.connection'





export default ( async () => {
    
    return await connection(admin, serviceAccountKey);
    
})();



