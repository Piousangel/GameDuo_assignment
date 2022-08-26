import { Body, Controller, Get, Param, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateUserDto } from 'src/dto/create-user.dto';
import { RaidStatus, User } from './users.model';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {

    constructor(private usersService: UsersService){}

    @Get('/')
    getAllUsers() : User[] {

        return this.usersService.getAllUsers();
    }

    @Post('/')
    @UsePipes(ValidationPipe)
    createUser(

        @Body() createUserDto : CreateUserDto
    ) : User {
        return this.usersService.createUser(createUserDto)
    }

    // @Patch('/:id/status')
    // updateUserBossRaid(
    //     @Param('id') id: string,
    //     @Body('status') bossRaid: RaidStatus,
    // ){
    //     return this.usersService.updateUserBossRaid(id, bossRaid)
    // }

    @Post('/bossRaid/enter')
    enterBossRaid(

        @Body('userId') id : number,
        @Body('level') level : number,
        
        
    ){
        return this.usersService.enterBossRaid(id)
    }

}
