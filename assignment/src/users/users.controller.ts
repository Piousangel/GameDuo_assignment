import { Body, Controller, Get, Param, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateUserDto } from '../dto/create-user.dto';
import { User } from './users.entity';
// import { User } from './users.model';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {

    constructor(private usersService: UsersService){}ß

    // @Get('/')
    // async getAllUsers() : Promise<User[]> {

    //     return await this.usersService.getAllUsers();
    // }

    @Get('/:id')
    async getUserById( @Param('userId') userId  : number): Promise<User>{
            return await this.usersService.getUserById(userId);
    }
        
    @Post('/')
    @UsePipes(ValidationPipe)
    async createUser(

        @Body() createUserDto : CreateUserDto
    ) : Promise<User> {

        return await this.usersService.createUser(createUserDto);
    }

    // @Patch('/:id/status')
    // updateUserBossRaid(
    //     @Param('id') id: string,
    //     @Body('status') bossRaid: RaidStatus,
    // ){
    //     return this.usersService.updateUserBossRaid(id, bossRaid)
    // }

    // @Post('/bossRaid/enter')
    // async enterBossRaid(

    //     @Body('userId') userId : number,
    //     @Body('level') level : number,
        
        
    // ){
    //     return await this.usersService.enterBossRaid(userId)
    // }

}
