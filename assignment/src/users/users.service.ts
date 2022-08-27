import { ConflictException, Injectable, NotFoundException, Inject } from '@nestjs/common';
// import { User } from './users.model';
// import { v1 as uuid } from 'uuid';
import { CreateUserDto } from 'src/dto/create-user.dto'; 
// import { UserRepository } from './users.repository'; 
import { User } from './users.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
    // private users : User[] = [];  //local

    
    constructor(
        
        @InjectRepository(User)
        private userRepository : Repository<User>,
    ){}

    async createUser(createUserDto : CreateUserDto) : Promise<User> {

        const userId = createUserDto.userId;

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
