import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { UsersService } from './users/users.service';
import { TypeOrmModule } from '@nestjs/typeorm'
import { UserRepository } from './users/users.repository';
@Module({
  imports: [
    TypeOrmModule.forFeature([UserRepository])
  ],
  providers: [UsersService],
 
})
export class AppModule {}
