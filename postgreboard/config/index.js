require('dotenv').config()

const env = process.env

const development = {
  "username": env.DB_USER,
  "password": env.DB_PW,
  "database": env.DB_NAME,
  "host": env.DB_HOST,
  "dialect": env.DB_TYPE,
  "define": {
    "underscored": false,
    "freezeTableName": false,
    "charset": "utf8",
    "dialectOptions": {
      "collate": "utf8_general_ci"
    },
    "timestamps": true,
    "paranoid": true
  }
}

module.exports = {
  development
}