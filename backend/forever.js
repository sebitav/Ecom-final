import express from 'express'
import infoRoute from './routes/info'
// const express = require('express')
// const infoRoute = require('./routes/info')

const app = express()
const PORT = process.argv[2] || 8080

app.get('/', (req, res) => {
   res.send(`
      <h1>Express server con foreve</h1>
      <h2>process - ${process.pid} en puerto ${process.argv[2]}</h2>
      <a href="/info">ir a info</a><br />
      <a href="/api/random">ir a api/random</a>
   `)
})


app.use('/api/random', (req, res) => {
   res.send(`<h1>process - ${process.pid} en puerto ${process.argv[2]}</h1>`)
})
app.use('/info', infoRoute)


app.listen(PORT, () => {
   console.log(`server iniciado puerto ${PORT} - PID: ${process.pid}`)
})