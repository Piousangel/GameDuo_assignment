import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { User } from './users.model';
// import { v1 as uuid } from 'uuid';
import { CreateUserDto } from 'src/dto/create-user.dto'; 

@Injectable()
export class UsersService {
    private users : User[] = [];

    createUser(createUserDto : CreateUserDto) {

        const userId = createUserDto.userId;

        //중복 검사
        //const isValid = async findAll() 
        
        // if(isValid) {
        //     const user : User = {
        //         id : userId,
                
        //     }
    
        //     this.users.push(user);
        //     return user;
        // }
        // else{
        //     throw new ConflictException(`중복된 아이디입니다.`);
        // }

        
    }

    getAllUsers() {
        return this.users;
    }

    getUserById(id : number) : User {

        const serach = this.users.find(users => users.id === id);

        if(!serach){
            throw new NotFoundException(`회원을 찾을 수 없습니다 ${id}`);
        }
        return serach;
    }

    // updateUserBossRaid(id : string, bossRaid: RaidStatus): User {
    //     const user = this.getUserById(id);
    //     user.bossRaid = bossRaid;
    //     return user;
    // }

    enterBossRaid(id : number) : User {
        const user = this.getUserById(id);
        user.bossRaid = RaidStatus.RUNNING;
        return user;
    }
}
