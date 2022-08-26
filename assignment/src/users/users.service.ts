import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
// import { User } from './users.model';
// import { v1 as uuid } from 'uuid';
import { CreateUserDto } from 'src/dto/create-user.dto'; 
import { UserRepository } from './users.repository';
import { InjectRepository} from '@nestjs/typeorm';
import { User } from './users.entity';

@Injectable()
export class UsersService {
    // private users : User[] = [];  //local

    constructor(
        @InjectRepository(UserRepository)
        private userRepository : UserRepository,
    ){}

    createUser(createUserDto : CreateUserDto) {

        const {userId, level} = createUserDto;

        //중복 검사
        //const isValid = async findAll() 
        
        // if(isValid) {
            const user : User = {
                userId : userId,
                level : level,
            }
    
            this.users.push(user);
            return user;
        // }
        // else{
        //     throw new ConflictException(`중복된 아이디입니다.`);
        // }

        
    }

    async getUserById(userId : number) : Promise <User> {

        const serach = await this.userRepository.findOne(userId);

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
