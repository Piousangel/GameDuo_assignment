import { BaseEntity, Column, Entity, CreateDateColumn, UpdateDateColumn, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { RaidStatus } from "./user-status.enum"; 


@Entity()
export class User extends BaseEntity{

    @PrimaryGeneratedColumn()
    userId : number;

    @Column()
    totalScore: number;

    @Column()
    isEntered: boolean;

    // @OneToMany()
    // raidRecords : [];

    @CreateDateColumn({ type: 'timestamp' })
    createdAt: Date;

    @UpdateDateColumn({ type: 'timestamp' })
    updatedAt: Date;
}