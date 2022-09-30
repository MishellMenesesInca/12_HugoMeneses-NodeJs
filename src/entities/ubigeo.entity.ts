
import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({ name: 'UBIGEO' })
export class UbigeoEntity {
    @PrimaryColumn({ name: 'CODUBI', nullable: false })
    id: string;

    @Column({ name: 'DEPUBI', nullable: false })
    departamento: string;

    @Column({ name: 'PROUBI', nullable: false })
    provincia: string;

    @Column({ name: 'DISUBI', nullable: false })
    distrito: string;
}