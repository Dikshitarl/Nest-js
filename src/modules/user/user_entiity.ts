import { Entity,Column,PrimaryGeneratedColumn,CreateDateColumn,UpdateDateColumn } from "typeorm";


@Entity()
export class User{
 @PrimaryGeneratedColumn('uuid')
 id:string


 @Column({name:'first_name',}) 
 first_Name:string 

 @Column({name:'last_name'})
 last_Name:string 

 @Column({unique:true})
 email:string 

 @Column()
 password: string;

 @Column()
 @CreateDateColumn({name:"created_at"})
 createdAt: Date;

 @UpdateDateColumn({name:'updated_at'})
 updatedAt: Date;


}