const nodemailer = require('nodemailer')

const sender = require('../config/emailconfig')

const sendBasicEmail =  (mailFrom, mailTo, mailSubject, mailBody) =>{
  const response =   sender.sendMail({
        from: mailFrom,
        to: mailTo
    })
  console.log(response)
}

module.exports = {
    sendBasicEmail
}