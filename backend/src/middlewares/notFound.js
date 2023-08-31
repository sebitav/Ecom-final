import logger from '../utils/logger.js'

export default function (req, res) {
  logger.warn(`Ruta ${req.originalUrl}, method ${req.method} no inplementada`)
  res.status(501).json({ error: -2, descripcion: `Ruta ${req.originalUrl}, method ${req.method} no inplementada` })
}
