import { Module } from '@nestjs/common';
import { ConfigModule,ConfigService } from '@nestjs/config';
import  {validate}  from './config/env.validate.js';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './modules/user/user_modules.js';
import databaseValidate from './config/database.validate.js';

@Module({


 imports:[
 ConfigModule.forRoot({
  isGlobal:true,
  validate,
  load :[databaseValidate],
 }),

 TypeOrmModule.forRootAsync({
  imports: [ConfigModule],
  inject :[ConfigService],






  useFactory:(configService: ConfigService)=>(
   {
        type: 'postgres',
        host: configService.getOrThrow<string>('database.host'),
        port: configService.getOrThrow<number>('database.port'),
        username: configService.getOrThrow<string>('database.username'),
        password: configService.getOrThrow<string>('database.password'),
        database: configService.getOrThrow<string>('database.database'),

        autoLoadEntities: true,
        synchronize: true,
      }


  )




 }),

UserModule


],

})
export class AppModule{}

