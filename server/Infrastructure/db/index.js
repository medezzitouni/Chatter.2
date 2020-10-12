const admin = require('firebase-admin')
const serviceAccountKey = require('./ServiceAccountKey.json')
import connection from './db.connection'





export default (() => {
    
    return connection(admin, serviceAccountKey);
    
})();



