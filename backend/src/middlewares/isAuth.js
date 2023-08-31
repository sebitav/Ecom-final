export default function (req, res, next){
   if(req.isAuthenticated()) {
      req.session.touch()

      next()
   } else {
      return res.status(401).json({status: 'error', msg: 'no Autorizado'})
   }
}