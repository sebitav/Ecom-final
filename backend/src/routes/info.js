import express from 'express'
import { ARGS } from '../utils/minimist.js'
import os from 'os'
import logger from '../utils/logger.js'
const numCPUs = os.cpus().length

const router = express.Router()
const PORT = process.argv[2]

router.get('/', (req, res) => {

   const html = `
   <h2>Informacion de la app</h2>
   <ul>
      <li>carpeta proyecto <strong>${process.cwd()}</strong> </li><br/>
      <li>argumentos <strong> ${JSON.stringify(process.argv.slice(2))}</strong></li><br/>
      <li>Sistema operativo <strong> ${process.platform}</strong></li><br/>
      <li>ID proceso <strong>${process.pid}</strong></li><br/>
      <li>memoria <strong> ${process.memoryUsage().rss}</strong></li><br/>
      <li>cantidad de procesadores <strong> ${numCPUs}</strong></li><br/>
      <li>escuchando el puerto <strong> ${PORT || 8080}</strong></li><br/>
   </ul>
   `
   logger.info(`Get Info/ ${html}`);
   res.status(200).send(html)
})

export default router