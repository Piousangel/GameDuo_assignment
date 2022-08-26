import { IsNotEmpty } from "class-validator";

export class CreateUserDto {
    @IsNotEmpty()
    userId : number;

    @IsNotEmpty()
    level : number;

    
}
