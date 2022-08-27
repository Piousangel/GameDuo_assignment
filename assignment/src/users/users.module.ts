import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmExModule } from 'src/db/typeorm-ex.module'; 
import { UsersController } from './users.controller';
import { User } from './users.entity';
// import { UserRepository } from './users.repository';
import { UsersService } from './users.service';

@Module({
  imports: [
    // TypeOrmExModule.forCustomRepository([UserRepository]),
    TypeOrmModule.forFeature([User]),
    TypeOrmModule.forRoot()
  ],
  controllers: [UsersController],
  providers: [UsersService]
})
export class UsersModule {}
