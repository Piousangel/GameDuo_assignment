import {Repository } from "typeorm";
import { User } from "./users.entity";
// import { CreateUserDto } from "src/dto/create-user.dto";
import { CustomRepository } from "../db/typeorm-ex.decorator";

@CustomRepository(User)
export class UserRepository extends Repository<User> {

    async createBoard(userId : number) : Promise<User> {
        
        const user = this.create({ 
          userId,
          level : 1,
        })

        await this.save(user);
        return user;
    }
    
}