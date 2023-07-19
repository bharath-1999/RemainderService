const nodemailer = require('nodemailer')
const TicketRepository = require('../repository/ticket-repository')
const sender = require('../config/emailconfig')
const repo = new TicketRepository();

const sendBasicEmail =  (mailFrom, mailTo, mailSubject, mailBody) =>{
  const response =   sender.sendMail({
        from: mailFrom,
        to: mailTo
    })
  console.log(response)
}

const fetchPendingEmails = async(timeStamp) => {

    try {
        const response = await repo.getAll({status: "PENDING"});
        return response; 
    } catch (error) {
        console.log(error)
    }
}

const createNotification = async (data) => {
    try {
        const response = await repo.createTicket(data);
        return response;
    } catch (error) {
        console.log(error);
        throw {error}
    }
}

module.exports = {
    sendBasicEmail,
    fetchPendingEmails,
    createNotification

}