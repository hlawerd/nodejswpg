const express = require('express');
const port = 3000;
const app = express();
const path = require('path');
const getStatus = {"status": 200, "message": "Este \"request/response\" está OK" };

/* ############## Middleware function requestTime ############## */
const requestTime = (req, res, next) => {
    const message = `Request: ${req.baseUrl} ${Date.now()}`;
    console.log(message);
    
    next();
  };
/* ## To load the middleware function ## */
app.use(requestTime);

/* ############## Resquesting the status as return true test ############## */
app.get('/', (req, res) => { res.status(200).send(` Status: ${getStatus.status}\n
                                                    Message : ${getStatus.message} \n`)});


/* ####################### conection test ####################### */
app.listen(port, () => console.log(`Conexting on the port: ${port} ....`));