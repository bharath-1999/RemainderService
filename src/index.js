const express = require('express');
const bodyParser = require('body-parser')
const TicketController = require('./controllers/ticketController')
const app = express();
const {PORT } = require('./config/serverConfig')
const  jobs = require('./util/job')

const setupAndStartServer = () =>{
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}))
    app.post('/api/v1/tickets',TicketController.create)

    app.listen(PORT, () => {
        console.log(`app started at port ${PORT}`);
       jobs();
    });
}
setupAndStartServer();