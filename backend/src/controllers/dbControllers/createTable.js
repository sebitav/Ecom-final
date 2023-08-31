import configMsql from '../../config/configMysql.js'
// const configMsql = require('../config/configMysql.js')
import configSqlite from '../../config/configSqlite.js'
// const configSqlite = require('../config/configSqlite.js')
import Knex from 'knex'
// const Knex = require('knex')

const knexMsql = Knex(configMsql)
const knexSqlite = Knex(configSqlite)

;(async () => {
  try {
    const exists = await knexMsql.schema.hasTable('productos')
    const carritoExists = await knexMsql.schema.hasTable('carrito')
    const mensajesExists = await knexSqlite.schema.hasTable('mensajes')
    if (!exists) {
      await knexMsql.schema.createTable('productos', (table) => {
        table.increments()
        table.string('nombre')
        table.string('descripcion')
        table.string('codigo')
        table.string('foto')
        table.float('precio')
        table.float('stock')
        table.timestamp('created_at').defaultTo(knexMsql.fn.now())
      })

      await knexMsql('productos').insert([
        {
          nombre: 'zapatos',
          descripcion: 'Esta es una simple descripcion de el producto zapatos',
          codigo: '123456',
          foto: 'http://foto.com',
          precio: 150,
          stock: 25,
        },
        {
          nombre: 'playstation',
          descripcion: 'Esta es una simple descripcion de el producto playstation',
          codigo: '4613246',
          foto: 'http://foto.com',
          precio: 220,
          stock: 30,
        },
        {
          nombre: 'pc',
          descripcion: 'Esta es una simple descripcion de el producto pc',
          codigo: '123456',
          foto: 'http://foto.com',
          precio: 1150,
          stock: 10,
        },
      ])
    }

    if (!carritoExists) {
      await knexMsql.schema.createTable('carrito', (table) => {
        table.increments()
        table.integer('carritoID')
        table.integer('productoID')
        table.timestamp('cart_created_at').defaultTo(knexMsql.fn.now())
      })

      await knexMsql('carrito').insert([
        { carritoID: 1, productoID: 1 },
        { carritoID: 1, productoID: 3 },
        { carritoID: 1, productoID: 4 },
        { carritoID: 2, productoID: 1 },
        { carritoID: 2, productoID: 2 },
      ])
    }

    if (!mensajesExists) {
      await knexSqlite.schema.createTable('mensajes', (table) => {
        table.increments()
        table.string('sendBy')
        table.string('mensaje')
        table.timestamp('created_at').defaultTo(knexSqlite.fn.now())
      })
    }
  } catch (e) {
    console.log(e)
  } finally {
    knexMsql.destroy()
    knexSqlite.destroy()
  }
})()
