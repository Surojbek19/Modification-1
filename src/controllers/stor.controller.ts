import { NextFunction, Request, Response } from "express";
import { T } from "../libs/types/common";
import MemberService from "../models/Member.service";
import { AdminRequest, LoginInput, MemberInput } from "../libs/types/member";
import { MemberType } from "../libs/enums/member.enum";
import session from "express-session";
import Errors, { HttpCode, Message } from "../libs/Errors";

const memberService = new MemberService();

const storController: T = {} 

storController.goHome = (req: Request, res: Response) => {
    try{
        console.log("goHome")
        res.render("home");
        // send | json | redirect | end | render
    } catch(err) {
        console.log("ERROR, goHome", err)
        res.redirect("/admin");
    }
};

storController.getSignup = (req: Request, res: Response) => {
    try{
        console.log("getSignup")
        res.render("signup");
    } catch(err) {
        console.log("ERROR, Signup Page", err)
        res.redirect("/admin");
    }
};


storController.getLogin = (req: Request, res: Response) => {
    try{
        console.log("getLogin")
        res.render("login");
    } catch(err) {
        console.log("ERROR, Login Page", err)
        res.redirect("/admin");
    }
};

storController.processSignup = async(req: AdminRequest, res: Response) => {
    try{
        console.log("processSignup");
        const file = req.file;
        if(!file)
        throw new Errors(HttpCode.BAD_REQUEST, Message.SOMETHING_WENT_WRONG);
        
        const newMember: MemberInput =req.body;
        newMember.memberImage = file?.path.replace(/\\/g, "/");
        newMember.memberType = MemberType.STOR
        const result = await memberService.processSignup(newMember);

        req.session.member = result;
        req.session.save(function() {
            res.redirect("/admin/product/all");
        })

    } catch(err) {
        console.log("ERROR, processSignup", err)
        const message = err instanceof Errors ? err.message : Message.SOMETHING_WENT_WRONG;
        res.send(`<script> alert("${message}"); window.location.replace('/admin/signup') </script>`);
    }
};

storController.processLogin = async (req: AdminRequest, res: Response) => {
    try{
        console.log("processLogin")

        const input: LoginInput = req.body;
        const result = await memberService.processLogin(input);

         req.session.member = result;
         req.session.save(function() {
           res.redirect("/admin/product/all");
        })

    } catch(err) {
        console.log("ERROR, processLogin", err)
        const message = err instanceof Errors ? err.message : Message.SOMETHING_WENT_WRONG;
        res.send(`<script> alert("${message}"); window.location.replace('/admin/login') </script>`);
    }
};

storController.logout = async (req: AdminRequest, res: Response) => {
    try{
        console.log("logout")
        req.session.destroy(function() {
            res.redirect("/admin");
        })

    } catch(err) {
        console.log("ERROR, logout", err)
        res.redirect("/admin");
    }
};

storController.getUsers = async (req: Request, res: Response) => {
    try {
        console.log("getUsers");
        const result = await memberService.getUsers();
        console.log("result:", result)

        res.render("users", { users: result })
    } catch(err) {
        console.log("ERROR, getUsers:", err);
        res.redirect("/admin/login");
    }
};


storController.updateChosenUser = async (req: Request, res: Response) => {
    try {
        console.log("updateChosenUser");
        const result = await memberService.updateChosenUser(req.body);
        res.status(HttpCode.OK).json({ data: result })
    } catch(err) {
        console.log("ERROR, updateChosenUser:", err);
        if(err instanceof Errors) res.status(err.code).json(err);
        else res.status(Errors.standart.code).json(Errors.standart)
    }
};


storController.checkAuthSession = async (req: AdminRequest, res: Response) => {
    try{
        console.log("checkAuthSession")

    if(req.session?.member) res.send(`<script> alert("${req.session.member.memberNick}") </script>`);
    else res.send(`<script> alert("${Message.NOT_AUTHENTICATED}") </script>`);

    } catch(err) {
        console.log("ERROR, checkAuthSession", err)
        res.send(err)
    }
};

storController.verifyStor = (
    req: AdminRequest, 
    res: Response,
    next: NextFunction
    ) => {
    if(req.session?.member?.memberType === MemberType.STOR) {
        req.member = req.session.member;
        next();
    } else {
        const message = Message.NOT_AUTHENTICATED;
        res.send(
            `<script> alert("${message}"); window.location.replace('/admin/login') </script>`
        )
    }
};
        

export default storController;