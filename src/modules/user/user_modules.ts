import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import {User} from './user_entiity.js';
import { UserRepository } from "./user_repo.js";
import { UserService } from "./user.services.js";
import { UserController } from "./user.controller.js";

@Module({
 imports :[TypeOrmModule.forFeature([User]),],
 providers:[UserRepository,UserService],
 controllers:[UserController],

 

 
})
export class UserModule{}
