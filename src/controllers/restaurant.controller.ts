import { Request, Response } from "express";
import { T } from "../libs/types/common";
import MemberService from "../models/Member.sevice";

const restaurantController: T = {} 

restaurantController.goHome = (req: Request, res: Response) => {
    try{
        res.send("Home Page");
    } catch(err) {
        console.log("ERROR, goHome", err)
    }
};

restaurantController.getLogin = (req: Request, res: Response) => {
    try{
        res.send("Login Page");
    } catch(err) {
        console.log("ERROR, Login Page", err)
    }
};

restaurantController.getSignup = (req: Request, res: Response) => {
    try{
        res.send("Signup Page");
    } catch(err) {
        console.log("ERROR, Signup Page", err)
    }
};

export default restaurantController;