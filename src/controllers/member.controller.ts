import {T} from "../libs/types/common";
import  {Request,Response} from "express";
import MemberService from "../models/Member.service";
import {LoginInput, Member, MemberInput,  } from "../libs/types/member";
import Errors from "../libs/Errors";
const  memberService = new MemberService();
//REACT
const memberController: T = {};


 memberController.signup = async (req: Request, res:Response) => {
    try{
       console.log('signup');
      console.log("body:",req.body);
        const input : MemberInput = req.body,
       result: Member = await memberService.signup(input);

       //TOKEN 
       res.json({member: result});
    }catch(err){
     console.log("Error, signup", err);
   if(err instanceof Errors) res.status(err.code).json(err);
   else res.status(Errors.standard.code).json(Errors.standard);
    }
  
 
 };
 memberController.login = async(req: Request, res:Response) => {
    try{
       console.log('login');

      console.log("body:",req.body);
      const input:LoginInput = req.body,
      result = await memberService.login(input);
      res.json({member:result});
       
    }catch(err){
     console.log("Error, login", err)
     if(err instanceof Errors) res.status(err.code).json(err);
     else res.status(Errors.standard.code).json(Errors.standard);
     //res.send(err);
    }
  
 
 };
 export default memberController;


 
 