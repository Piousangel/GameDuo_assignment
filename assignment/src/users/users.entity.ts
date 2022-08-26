import { BaseEntity, Column, Entity, CreateDateColumn, UpdateDateColumn, PrimaryGeneratedColumn, OneToMany } from "typeorm";
// import { RaidStatus } from "./users.model";


@Entity()
export class User extends BaseEntity{

    @PrimaryGeneratedColumn()
    userId : number;

    @Column()
    level: number;

    @CreateDateColumn({ type: 'timestamp' })
    createdAt: Date;

    @UpdateDateColumn({ type: 'timestamp' })
    updatedAt: Date;
}