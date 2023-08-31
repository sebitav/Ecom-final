import  db  from "../config/firebase.js";
// const db = require("../config/firebase.js");


class Producto {

   async saveProduct(data){
      const response = await db.collection('productos').add(data)
      const query = await response.get()
 
      return {id: query.id, ...query.data()}
   }

   async getAll(){
      let response = await db.collection('productos').get()
      const query = response.docs.map(doc => ({
         id: doc.id,
         ...doc.data()
      }))

      return query
   }

   async getById(id){
      const response = await db.collection('productos').doc(id).get()
      const query = response.data()

      return query
   }

   async removeById(id){
      try {
         await db.collection('productos').doc(id).delete()
         
      } catch (error) {
         console.log(error)
      }
   }

   async updateById(id, data){
      const response = await db.collection('productos').doc(id).update(data)
      console.log(response)
   }
}

const fireStoreProduct = new Producto()

export {fireStoreProduct}