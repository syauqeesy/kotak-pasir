const mysql = require('mysql2')

class Database {
  sql = ''
  bindData

  pool() {
    const pool = mysql.createPool({
      host: 'localhost',
      user: 'root',
      password: 'sauki123',
      database: 'express_app',
      waitForConnections: true,
      connectionLimit: 10,
      queueLimit: 0
    })

    return pool
  }

  getConnection() {
    const connection = new Promise((resolve, reject) => {
      this.pool().getConnection((err, connection) => {
        if (err) {
          reject(err)

          return
        }

        resolve(connection)
      })
    })

    return connection
  }

  executeQuery() {
    const result = new Promise(async (resolve, reject) => {
      this.getConnection()
        .then(connection => {
          connection.execute(this.sql, this.bindData, (err, results, fields) => {
            if (err) {
              reject(err)

              return
            }

            this.pool().releaseConnection(connection)
            resolve(results)
          })
        })
        .catch(err => {
          reject(err)
        })
    })

    return result
  }
}

module.exports = new Database()
