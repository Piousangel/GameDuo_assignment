import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { RaidStatus } from "./users.model";


@Entity()
export class User extends BaseEntity{

    @PrimaryGeneratedColumn()
    id : number;

    @Column()
    bossRaid: RaidStatus;
}