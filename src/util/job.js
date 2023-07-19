const cron = require('node-cron')
const emailService = require('../services/email-service')
const sender = require('../config/emailconfig')

const setupJobs =  () => {
    cron.schedule('*/2 * * * *', async () =>{
        const response = await emailService.fetchPendingEmails()
        //put emailService logic here
        console.log(response)
    });
}

module.exports = setupJobs