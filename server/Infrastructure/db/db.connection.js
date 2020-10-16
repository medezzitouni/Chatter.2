

export default function(admin, serviceAccountKey){

   return new Promise((resolve, reject ) => {
        
    admin.initializeApp({
            credential: admin.credential.cert(serviceAccountKey)
        })
        var db = null
        db = admin.firestore()
        if(!db) reject('db is not connected')
        else resolve(db) 
   })    
}