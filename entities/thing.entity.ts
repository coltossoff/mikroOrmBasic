import { Entity, PrimaryKey } from "@mikro-orm/core";

@Entity()
export class Thing {
    @PrimaryKey()
    id!: number;
}