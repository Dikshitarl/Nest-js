import { ConflictException, Injectable } from "@nestjs/common";
import { UserRepository } from "./user_repo.js";
import bcrypt from "bcryptjs";
import { CreateUserDto } from "../Dto/createuser.dto.js";




@Injectable()
export class UserService{
 constructor (private readonly userRepository:UserRepository){}

 async createUser(data:CreateUserDto){
  const userexists =await this.userRepository.findByEmail(data.email)
   


  if (userexists)
  {
   throw new ConflictException ('User Already exists')
  }


  const hashpassword = await bcrypt.hash(data.password,10)

  const newUser = await this.userRepository .createUser({...data,password:hashpassword})
  return newUser


 };




}


