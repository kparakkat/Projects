import { Leavehistory } from './leavehistory';

export class Employee {

    constructor(
    public emp_id?: number,
    public emp_name?: String,
    public leave_balance?: number,
    public emp_phone?: number,
    public emp_dept?: String,
    public emp_mail?: String,
    public emp_doj?: Date,
    public emp_mng_id?: number,
    public leaveHistory: Leavehistory[] = []
    ) {}


}
