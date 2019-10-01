import { Component, OnInit } from '@angular/core';
import { Leavehistory } from '../Shared/leavehistory';
import { LeaveapplicationsService } from '../Shared/leaveapplications.service';
import { Router, ActivatedRoute } from '@angular/router';
import { EmpService } from '../Shared/emp.service';
import { PendleaveService } from '../Shared/pendleave.service';
import { Emppendleave } from '../Shared/emppendleave';

@Component({
  selector: 'app-approvedenyleave',
  templateUrl: './approvedenyleave.component.html',
  styleUrls: ['./approvedenyleave.component.css']
})
export class ApprovedenyleaveComponent implements OnInit {
  private empId:number;
  public empPendLeave: Emppendleave;
  updateResult: any;

  constructor(public leaveappservice:LeaveapplicationsService, 
              public empservice: EmpService ,
              public pendleaveservice: PendleaveService,
              private router:Router, private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.empId = params['empid'];
      this.empPendLeave = this.pendleaveservice.getempPendLeve();
    })
  }

  performApprove(): void{
    this.empPendLeave.pendLeave.leave_status = 'APPROVED';
    this.leaveappservice.updateLeaveHistory(this.empPendLeave.pendLeave).subscribe( resp => {this.updateResult = resp;});
    this.router.navigate([`/pendingleave/${this.empId}`]);
  }

  performDeny(): void{
    this.empPendLeave.pendLeave.leave_status = 'DENIED';
    this.leaveappservice.updateLeaveHistory(this.empPendLeave.pendLeave).subscribe( resp => {this.updateResult = resp;});
    this.empPendLeave.empDetails.leave_balance = (this.empPendLeave.empDetails.leave_balance + this.empPendLeave.pendLeave.number_of_days);
    this.empservice.updateEmp(this.empPendLeave.empDetails).subscribe( resp => {this.updateResult = resp;});
    this.router.navigate([`/pendingleave/${this.empId}`]);
  }

  performCancel(): void{
    this.router.navigate([`/pendingleave/${this.empId}`]);
  }
}
