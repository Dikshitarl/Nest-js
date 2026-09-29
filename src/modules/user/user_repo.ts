import { Injectable } from "@nestjs/common";
import { Repository } from "typeorm"
import { User } from "./user_entiity.js";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class UserRepository{

 constructor( @InjectRepository(User)private readonly repository:Repository<User>,){}


  async createUser(userData: Partial<User>): Promise<User> 
  {
  const user =this.repository.create(userData);
  return this.repository.save(user);
 } 


 // async findAll(): Promise<User[]>{
 //  return this.repository.find();
 // }



 //  async findById(id:string): Promise<User|null>
 // {
 //  return this.repository.findOne ({where:{id},})
 // };

 

 async findByEmail(email:string): Promise<User|null>{

  return this.repository.findOne ({where :{email},})
 };



  // async UpdateUser(
  // id:string,
  // userData :Partial<User>,):Promise <User| null>
  // {
  //  await this.repository.update(id,userData)
  //  return this.findById (id);
  // }
 

  // async deleteUser(id:string,):Promise<void>{
  //  await this.repository.delete(id);
  // }


}




