import express from 'express'
import upload from '../config/multer.js'
import avatarController from '../controllers/avatarController.js'

const router = express.Router()

router.post('/:userId', upload.single('avatar'), (req, res) => {
  const { userId } = req.params
  res.json({ status: 'ok' })
  console.log(req.file)
  console.log({userId})
} )

router.get('/:userId', avatarController.getUserAvatar )

export default router