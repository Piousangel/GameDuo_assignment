import {CustomRepository, Repository } from "typeorm";
import { User } from "./users.entity";
import { CreateUserDto } from "src/dto/create-user.dto";
import { CustomRe}

@CustomRepository(User)
export class UserRepository extends Repository<User> {

    async createBoard(createUserDto: CreateUserDto) : Promise<User> {
        const userId = createUserDto.userId;

        const user = this.create({ 
          userId,
          level : 1,
        })

        await this.save(user);
        return user;
    }
    
}