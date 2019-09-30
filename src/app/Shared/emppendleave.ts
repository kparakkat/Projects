import { Employee } from './employee';
import { Leavehistory } from './leavehistory';

export class Emppendleave {
    constructor(public empDetails?: Employee,
                public pendLeave?: Leavehistory) {
    }
}
