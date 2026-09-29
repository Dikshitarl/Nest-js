import { Body, Controller, Post } from "@nestjs/common";
import { User } from "./user_entiity.js";
import { UserService } from "./user.services.js";
import { CreateUserDto } from "../Dto/createuser.dto.js";






@Controller('User')


export class UserController{
 
 constructor(private readonly userServices:UserService ){}
 @Post('register')

 async createUser(@Body()data:CreateUserDto){
 return this.userServices .createUser(data)
 }




}