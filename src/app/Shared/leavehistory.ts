export class Leavehistory {
    constructor(
    public emp_id?: number,
    public leave_type?: String,
    public leave_id?: number,
    public number_of_days?: number,
    public start_date?: Date,
    public end_date?: Date,
    public leave_status?: String,
    public applied_on?: Date,
    public manager_comments?: String,
    public reasons?: String,
    ) {}
}
