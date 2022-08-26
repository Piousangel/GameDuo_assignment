import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
// import { User } from './users.model';
// import { v1 as uuid } from 'uuid';
import { CreateUserDto } from 'src/dto/create-user.dto'; 
import { UserRepository } from './users.repository';
import { User } from './users.entity';
//import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UsersService {
    // private users : User[] = [];  //local

    constructor(
        //@InjectRepository(UserRepository)
        private userRepository : UserRepository,
    ){}

    async createUser(createUserDto : CreateUserDto) : Promise<User> {

        const {userId, level} = createUserDto;

        const user = this.userRepository.create({
            userId,
        })

        await this.userRepository.save(user);
        return user;
        
    }

    async getUserById(userId : number) : Promise <User> {

        const serach = await this.userRepository.findOne({
            where: {userId : userId},
        });

        if(!serach){
            throw new NotFoundException(`회원을 찾을 수 없습니다 ${userId}`);
        }
        return serach;
    }

    // updateUserBossRaid(id : string, bossRaid: RaidStatus): User {
    //     const user = this.getUserById(id);
    //     user.bossRaid = bossRaid;
    //     return user;
    // }

    // enterBossRaid(id : number) : User {
    //     const user = this.getUserById(id);
    //     return user;
    // }
}
