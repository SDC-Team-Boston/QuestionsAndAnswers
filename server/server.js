require('../db/db-index');// this line runs db-index.js to initialize database

/* === External Modules === */
const express = require('express');
const morgan = require('morgan');



/* === Internal Modules === */

/* === Instanced Modules === */
const app = express();

/* === Middleware === */
app.use(express.json()); //accept json as body data
app.use(express.urlencoded({extended: true}));


// Router
var router = require('./routes.js');

// Set up our routes
app.use('/', router); // this sends stuff to the router

//Bind port
const port = 4000;
app.listen(port, ()=>{
  console.log('listening on port: ', port)
});
