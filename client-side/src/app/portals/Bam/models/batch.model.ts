import { BatchType } from "./batch-type.model";


export class Batch {
    id : number; 
    name: string; 
    startDate : Date; 
    endDate : Date;
    type : BatchType;     

    constructor(id : number, name : string, startDate: Date, endDate : Date, type : BatchType ){
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
//     "trainer": {
//         "userId": 7,
//         "fName": "Jonathan",
//         "mName": "L",
//         "lName": "Joseph",
//         "email": "jn@mail.com",
//         "pwd": "$2a$10$0NfT1vNaTR0gLuHVxoe.U.tjMErqcKJrpwfWd8FSoXrZ/8BLKmocq",
//         "role": 2,
//         "batch": null,
//         "phone": "407",
//         "phone2": null,
//         "skype": "lol@skype",
//         "pwd2": null,
//         "assignForceID": null
//     },
//     "type": {
//         "id": 1,
//         "name": "Java",
//         "length": 10
//     }
// }