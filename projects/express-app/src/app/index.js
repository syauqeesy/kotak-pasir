module.exports = {
  database: require('./Database'),
  config: require('./Config'),
  multer: require('multer'),
  uuid: require('uuid'),
  joi: require('joi'),

  model: {
    user: require('./model/User')
  }
}
