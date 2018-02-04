import { BatchType } from './batch-type.model';

export class Batch {
    id: number;
    name: string;
    startDate: Date;
    endDate: Date;
    type: BatchType;

    constructor( id: number, name: string, startDate: Date, endDate: Date, type: BatchType ) {
        this.id = id;
        this.name = name;
        this.startDate = startDate;
        this.endDate = endDate;
    }
}
