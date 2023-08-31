import Knex from 'knex'
// const Knex = require('knex')
import configSqlite from '../../config/configSqlite.js'
// const configSqlite = require('../config/configSqlite.js')

class Mensajes {
  constructor(config) {
    this.knex = Knex(config)
  }

  async guardarMensaje(msg) {
    await this.knex('mensajes').insert({ sendBy: msg.sendBy, mensaje: msg.message })
  }

  async getMensajes() {
    const mensajes = await this.knex.select().from('mensajes')
    console.log('mensajes', mensajes.length)

    await this.knex.select().from('mensajes').del()
  }
}

const mensajes = new Mensajes(configSqlite)

export default mensajes
// module.exports = mensajes
