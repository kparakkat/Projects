import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Leavehistory } from '../Shared/leavehistory';
import { LeaveapplicationsService } from '../Shared/leaveapplications.service';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';
import { EmpService } from '../Shared/emp.service';
import { Employee } from '../Shared/employee';

@Component({
  selector: 'app-applyleave',
  templateUrl: './applyleave.component.html',
  styleUrls: ['./applyleave.component.css']
})
export class ApplyleaveComponent implements OnInit {
  private empId:number;
  public leaveAppPend: Leavehistory[] = [];
  public startDateOverlap: boolean = false;
  public endDateOverlap: boolean = false;
  public leaveExceedsLimit: boolean = false;
  public empDetails: Employee;
  todayDate: String;
  leave_types = ['Earing Leave'];
  model = new Leavehistory(this.empId, this.leave_types[0]);
  leaveHistory: any;
  submitted = false;

  onSubmit() {
                if (!this.isDateOverlap() && !this.isLeaveExceedsLimit())
                {
                  this.submitted = true; 
                  if (this.model.leave_type == "Earing Leave")
                    this.model.leave_type ='EL';
                  this.model.applied_on = new Date();
                  this.model.emp_id = this.empId;
                  this.model.leave_status = 'PENDING';
                  this.model.start_date = new Date(JSON.stringify(this.model.start_date));
                  this.model.end_date = new Date(JSON.stringify(this.model.end_date))
                  this.empDetails.leave_balance = this.empDetails.leave_balance - this.model.number_of_days;
                  this.leaveappservice.addLeaveHistory(this.model).subscribe( resp => {this.leaveHistory = resp;});
                  this.empservice.updateEmp(this.empDetails).subscribe( resp => {this.leaveHistory = resp;});
                  this.loadleaveApplications();
                }
              }
  
  constructor(public leaveappservice:LeaveapplicationsService, 
              private route:ActivatedRoute, private router:Router,
              public empservice:EmpService
              ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.empId = params['empid'];
      this.leaveAppPend = this.leaveappservice.getleavePendApproved();
      if (this.empId) {
        this.empservice.getEmp(this.empId)
        .subscribe(empDetails => {
          this.empDetails = empDetails;
        });
      }
    })
    let today = new Date((new Date().getTime() - 24 * 60 * 60 * 1000));
    this.todayDate = today.toISOString().slice(0,10);
  }

  loadleaveApplications(): void{
    this.router.navigate([`/leaveapplications/${this.empId}`]);
  }

  populateNoofDays(): void {
    if (this.model.start_date != null && this.model.end_date !=null)
    {
      let startDate: Date = this.model.start_date;
      let endDate: Date = this.model.end_date;
      let endDateTime = (new Date(endDate)).getTime();
      let startDateTime = (new Date(startDate)).getTime();
      let dayDiff = (Math.round((endDateTime - startDateTime)/(1000*60*60*24)));
      if (dayDiff >= 0)
        this.model.number_of_days = dayDiff + 1;
      else
        this.model.number_of_days = null;  
    }
  }

  isDateOverlap(): boolean{
    let startDateTime:Date = new Date(JSON.stringify(this.model.start_date));
    let endDateTime:Date = new Date(JSON.stringify(this.model.end_date));
    let leaveStartDate = this.leaveAppPend.filter( a =>  startDateTime >= new Date(a.start_date)  
                                      && startDateTime <= new Date(a.end_date) );
    if (leaveStartDate != null && leaveStartDate.length > 0)
      this.startDateOverlap = true;
    else
      this.startDateOverlap = false;
    let leaveEndDate = this.leaveAppPend.filter( a => endDateTime >= new Date(a.start_date)  
                                      && endDateTime <= new Date(a.end_date) );
    if (leaveEndDate != null && leaveEndDate.length > 0)
      this.endDateOverlap = true;
    else
      this.endDateOverlap = false;
    if (this.startDateOverlap && this.endDateOverlap)
      return true;
    else
      return false;
  }

  isLeaveExceedsLimit() : boolean{
    let leaveBalance = this.empDetails.leave_balance;
    if (this.model.number_of_days > leaveBalance)
      this.leaveExceedsLimit = true;
    else
      this.leaveExceedsLimit = false;
    
    return this.leaveExceedsLimit;
  }
}
