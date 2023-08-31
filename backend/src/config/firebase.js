
import admin from 'firebase-admin'
// const admin = require('firebase-admin')

// const serviceAccount = require("./firebase-admin-config.json");
import serviceAccount from './configFirebase.js'
// const serviceAccount = require('./configFirebase.js')

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});


const db = admin.firestore()
export default  {db}