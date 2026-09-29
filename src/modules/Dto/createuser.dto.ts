import { IsEmail, IsNotEmpty,IsString, MinLength } from "class-validator";




export class CreateUserDto {
@IsString()
@IsNotEmpty()
first_Name:string


@IsString()
@IsNotEmpty()
last_Name:string


@IsEmail()
@IsNotEmpty()
email:string


@IsString()
@IsNotEmpty()
@MinLength(8,{message:"password must be aleast 8 characters"})
password:string
}
