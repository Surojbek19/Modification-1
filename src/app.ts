import express from "express";
import path from "path";
import router from "./router"; 

//** 1-ENTRENCE **/
const app = express();
console.log("__dijrname:", __dirname);
app.use(express.static(path.join(__dirname, `public`)));
app.use(express.urlencoded({extended: true}));
app.use(express.json());


//** 2-SESSION **/


//** 3-VIEWS **/
app.set(`views`, path.join(__dirname, `views`));
app.set(`views enjine`, `ejs`);

//** 4-ROUTERS **/
app.use(`/`, router); //Middleware Design Pattern


export default app; //  = module.exports = app;