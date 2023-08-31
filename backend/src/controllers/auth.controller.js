import logger from '../utils/logger.js'

const checkUser = (req, res) => {
  console.log(req.isAuthenticated())
  //  if(!req.session?.user){
  //    return res.status(401).json({error: true})
  //  }
  const user = req.user
  logger.info('GET /checkUser')
  res.json({ isAuth: req.isAuthenticated(), user, admin: user?.username === 'admin' })
}

const login = (req, res) => {
  const user = req.user
  const { passwordHash, ...restUser } = user._doc
  res.json({ status: 'ok', user: restUser })
  logger.info(`POST /login status OK`)
  console.log(req.isAuthenticated())
}

const failLogin = (req, res) => {
  res.status(401).json({ status: 'error', msg: 'usuario o contraseña incorrectos' })
  logger.error(`GET /failLogin status error`)
}

const register = (req, res) => {
  const user = req.user
  res.json({ status: 'ok', user })
  logger.info(`POST /register status OK`)
}

const failRegister = (req, res) => {
  res.status(409).json({ status: 'error', msg: 'usuario ya registrado' })
  logger.error(`GET /failRegister status error`)
}

const logout = (req, res) => {
  //  req.session.destroy()
  req.logOut()
  logger.info('GET /logout')
  res.status(200).end()
}

export default { checkUser, login, failLogin, register, failRegister, logout }