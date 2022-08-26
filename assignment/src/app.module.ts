import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersService } from './users/users.service';
import { UsersModule } from './users/users.module';
import { typeORMConfig } from 'configs/typeorm.config';
import { TypeOrmExModule } from './db/typeorm-ex.module';

@Module({
  imports: [
    // TypeOrmModule.forRoot(typeORMConfig),
    UsersModule,
  ],
  // providers: [UsersService],
 
})
export class AppModule {}
