/*
1st step: npm init -y
2nd step: npm install express@5.0.0-alpha.8
3rd step: npm install -D nodemon
4th step: "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  } 
  write 
  "scripts": {
    "dev": "nodemon app"
  }
5th step: after license write "type": "module"
6th step: npm i ejs (used to access static files | It is a template engine)(Embeded javascript template)
7th step: npm i mongoose (For connecting mongodb database)
*/
import express from 'express';
import connectDB from "./db/connectdb.js";
import { join } from 'path';
import web from "./routes/web.js";
const app = express();
const port = process.env.PORT || '9000';
const DATABASE_URL = process.env.DATABASE_URL || "mongodb://localhost:27017";


//Database Connection
connectDB(DATABASE_URL);

app.use(express.urlencoded({ extended: false }));

//Static Files
app.use('/student', express.static(join(process.cwd(), "public")));
app.use('/student/edit', express.static(join(process.cwd(), "public")));

//Set Template engine (EJS)
app.set("view engine", "ejs");

app.use('/student', web);

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});