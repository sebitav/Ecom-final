import express from 'express'
import cluster from 'cluster'
import os from 'os'
import randomRoute from './src/routes/randomRoute'
import infoRoute from './src/routes/info'
// const express = require('express')
// const cluster = require('cluster')
// const numCPU = require('os').cpus().length
// const randomRoute = require('./routes/randomRoute')
// const infoRoute = require('./routes/info')


const app = express()

app.get('/', (req, res) => {
   res.send(`
      <h1>Express server</h1>
      <h2>process - ${process.pid} en puerto 8080 usando cluster nativo</h2>
      <h4>estamos en master</h4>
   `)
})


app.use('/api/random', randomRoute)
app.use('/info', infoRoute)

if (cluster.isPrimary) {
   console.log(`Master ${process.pid} is running`)
   app.listen(8080, () => {
      console.log('escuchando en el puerto 8080')
   })
   for (let i = 0; i < numCPU; i++) {
      cluster.fork()
   }
   cluster.on('exit', (worker, code, signal) => {
      console.log(`worker ${worker.id} died`)
      cluster.fork()
   })
} else {
   app.listen(8081, () => {
      console.log(`server iniciado puerto 8081, $worker ${cluster.worker.id} - PID: ${process.pid}`)
   })
}
