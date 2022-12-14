import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module'; 


@Module({
  imports: [
    TypeOrmModule.forRoot({
      "type": "postgres",
      "host": "localhost",
      "port": 5123,
      "username": "postgres",
      "password": "postgres",
      "database": "user-app",
      "extra": {
      "ssl": {
            "rejectUnauthorized": false
        }
    },
    "entities": [],
    }),
    UsersModule,
  ],
 
})
export class AppModule {}
