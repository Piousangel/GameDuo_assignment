import { BaseEntity, Column, Entity, CreateDateColumn, UpdateDateColumn, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { RaidStatus } from "./user-status.enum"; 


@Entity()
export class User extends BaseEntity{

    @PrimaryGeneratedColumn()
    userId : number;

    @Column()
    level: number;

    @Column()
    isEntered: boolean

    @CreateDateColumn({ type: 'timestamp' })
    createdAt: Date;

    @UpdateDateColumn({ type: 'timestamp' })
    updatedAt: Date;
}