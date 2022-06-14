const app = require('../app')
const path = require('path')

const upload = app.multer({
  storage: app.multer.diskStorage({
    destination: (request, file, callback) => {
      callback(null, './storage/profile-images')
    },
    filename: (request, file, callback) => {
      request.body.image = app.uuid.v4() + path.extname(file.originalname)
      callback(null, request.body.image)
    }
  })
})


upload.fileFilter = (request, file, callback) => {
  if (file.mimetype === 'image/jpg' || file.mimetype === 'image/png') {
    callback(null, true)

    return
  }

  callback(new Error('Profile image must be an image'))
}

upload.limits = {
  fileSize: 1024 * 5
}

const uploadProfileImage = (request, response, next) => {
  const uploaded = upload.single('image')

  uploaded(request, response, (err) => {
    if (err) {
      const responseBody = {
        status: false,
        code: 400,
        message: err.message
      }
      response.status(responseBody.code).json(responseBody)

      return
    }

    next()
  })
}

module.exports = uploadProfileImage
