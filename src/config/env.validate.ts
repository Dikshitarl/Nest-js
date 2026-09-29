
import { plainToInstance,  } from 'class-transformer';
import { IsEmail,IsNumber,IsString,IsNotEmpty, validateSync, } from 'class-validator';
import {error}from "console";


class environmentVable{
 @IsString()
 @IsNotEmpty()
 DB_HOST:string




 @IsString()
 @IsNotEmpty()
 DB_USERNAME:string



 @IsString()
 @IsNotEmpty()
 DB_PASSWORD:string



@IsNumber()
@IsNotEmpty()
 DB_PORT:Number


 @IsString()
 @IsNotEmpty()
 DB_NAME:string

}
export function validate(config:Record<string,unknown>){
 const validateconfig  = plainToInstance (
  environmentVable,
  config,
  {enableImplicitConversion: true},
 )

const errors = validateSync (validateconfig, {skipMissingProperties:false,})
   if (errors.length>0){
    throw new Error(
      `Environment validation failed: ${errors.map((error) => error.property).join(', ')}`,
);
 }
  return validateconfig
 
 }