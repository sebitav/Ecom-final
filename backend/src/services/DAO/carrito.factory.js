import { carritoServiceMysql } from "./mysql/carrito.mysql.service.js"
import { carritoServiceMongo } from "./mongodb/carrito.mongo.service.js"
import minimist from "minimist"

const argv = minimist(process.argv.slice(2))
const { db } = argv || 'mongodb'

const SELECT_DB = {
  'mongodb': carritoServiceMongo,
  'mysql': carritoServiceMysql
}
let instance = SELECT_DB[db] || carritoServiceMongo

export default class CarritoDAO {
  static initInstance() {
    return instance
  }
}