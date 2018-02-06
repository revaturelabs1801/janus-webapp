import { DaysDTO } from './daysDTO.model';

export class WeeksDTO {
daysDTO: DaysDTO;

    constructor(
        daysDTO: DaysDTO) {

        this.daysDTO = daysDTO;
    }
}
