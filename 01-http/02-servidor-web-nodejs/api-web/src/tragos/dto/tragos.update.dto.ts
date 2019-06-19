import {Column, PrimaryGeneratedColumn} from "typeorm";
import {DistribuidorEntity} from "../../distribuidor/distribuidor.entity";

export class TragosCreateDto {

    id:number;

    nombre: string;

    tipo: 'Ron'|'Vodka'|'Whiskey'|'Tequila'|'Puntas'|'Cerveza';

    gradosAlcohol: number;

    fechaCaducidad: Date;

    precio: number;

    distribuidorId: DistribuidorEntity;
}