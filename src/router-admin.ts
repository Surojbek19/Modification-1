import express from "express";
const routerAdmin = express.Router();
import storController from "./controllers/stor.controller";
import productController from "./controllers/product.controller";
import makeUploader from "./libs/utils/uploader";

//RESTAURANT
routerAdmin.get("/", storController.goHome);

routerAdmin
    .get("/login", storController.getLogin)
    .post("/login", storController.processLogin);

routerAdmin
    .get("/signup", storController.getSignup)
    .post("/signup",
    makeUploader("members").single("memberImage"),
    storController.processSignup)

routerAdmin.get("/logout", storController.logout)
routerAdmin.get("/check-me", storController.checkAuthSession)


//PRODUCT
routerAdmin.get("/product/all",
storController.verifyStor,    
productController.getAllProducts);

routerAdmin.post("/product/create", 
storController.verifyStor,
// uploadProductImage.single("productImage"),
makeUploader("products").array("productImages", 5),
productController.createNewProduct);

routerAdmin.post("/product/:id", 
storController.verifyStor,
productController.updateChosenProduct);

//USER
routerAdmin.get("/user/all", 
    storController.verifyStor,
    storController.getUsers);


routerAdmin.post("/user/edit", 
    storController.verifyStor,
    storController.updateChosenUser);
export default routerAdmin;