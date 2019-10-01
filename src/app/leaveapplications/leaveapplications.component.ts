import { Component, OnInit } from '@angular/core';
import { LeaveapplicationsService } from '../Shared/leaveapplications.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Leavehistory } from '../Shared/leavehistory';

@Component({
  selector: 'app-leaveapplications',
  templateUrl: './leaveapplications.component.html',
  styleUrls: ['./leaveapplications.component.css']
})
export class LeaveapplicationsComponent implements OnInit {
  private empId:number;
  public leaveApplications: Leavehistory[] = [];
  public leaveAppPend: Leavehistory[] = [];
  constructor(public leaveappservice:LeaveapplicationsService, private router:Router, private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.empId = params['empid'];
       if (this.empId) {
         this.leaveappservice.getLeaveApplications(this.empId)
         .subscribe(leaveApplications => {
           this.leaveApplications = leaveApplications;
         });
       }
    })
  }

  loadApplyLeave(): void{
    this.leaveAppPend = this.leaveApplications.filter( a => (a.leave_status == "PENDING" || a.leave_status == "APPROVED"));
    this.leaveappservice.setleavePendApproved(this.leaveAppPend);
    this.router.navigate([`/applyleave/${this.empId}`]);
  }

}
