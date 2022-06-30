const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const bodyparser = require('body-parser');
const path = require('path');
const connectDB = require('./server/database/dbConnection.js')

const app = express();
dotenv.config({ path: 'config.env' });
const port = process.env.PORT || 8080;

//Log requests
app.use(morgan('tiny'));

//MongoDB connection
connectDB();

//Parse request to body-parser
app.use(bodyparser.urlencoded({ extended: true }));
/*//Parse request to body-parser(alternative) 
app.use(bodyparser.json());*/

//set view engine
app.set('view engine', 'ejs');
// app.set('views', path.resolve(__dirname,'views/ejs'));  //If i use another folder in views folder.

//load assets
app.use('/css', express.static(path.resolve(__dirname, 'assets/css')));//css/style.css //have to put in ejs header
app.use('/img', express.static(path.resolve(__dirname, 'assets/img')));//img/pic.jpg //have to put in ejs header
app.use('/js', express.static(path.resolve(__dirname, 'assets/js')));//js/index.js //have to put in ejs header

//Load routers
app.use('/', require('./server/routes/router'));

app.listen(port, () => { console.log(`Server is listening on http://localhost:${port}`) });