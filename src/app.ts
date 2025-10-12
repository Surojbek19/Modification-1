import express from "express";
import path from "path";

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

export default app; //  = module.exports = app;