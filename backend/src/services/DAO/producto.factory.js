import { productServiceMongo } from "./mongodb/productos.mongo.service.js"
import { productServiceMysql } from "./mysql/productos.mysql.service.js"
import { productoServiceFile } from "./file/producto.service.file.js"
import minimist from "minimist"

const argv = minimist(process.argv.slice(2))
const { db } = argv

const SELECT_DB = {
  'mongodb': productServiceMongo,
  'mysql': productServiceMysql,
  'file': productoServiceFile
}
let instance = SELECT_DB[db] || productServiceMongo

export default class ProdDAO {
  static initInstance() {
    return instance
  }
}