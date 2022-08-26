export interface User {
    id : number;
    bossRaid: RaidStatus;
}

export enum RaidStatus {
    RUNNING = "RUNNING",
    STOP = "STOP"
}