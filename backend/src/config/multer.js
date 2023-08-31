import multer from 'multer'

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'user-avatars/')
  },
  filename: function (req, file, cb) {
    console.log('FILE', req.user)
    cb(null, req.user._id.toString() )
  }
})

export default multer({storage: storage})