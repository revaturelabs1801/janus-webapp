import { BatchType } from './batch-type.model';

export class Batch {
    id: number;
    name: string;
    startDate: Date;
    endDate: Date;
    type: BatchType;

    constructor(id: number, name: string, startDate: Date, endDate: Date, type: BatchType ) {
        this.id = id;
        this.name = name;
        this.startDate = startDate;
        this.endDate = endDate;
    }
}


// {
//     "id": 4,
//     "name": "1701-java-batch",
//     "startDate": 1483938000000,
//     "endDate": 1489723200000,
