import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Employee } from '../Shared/employee';
import { EmpService } from '../Shared/emp.service';
import { PendleaveService } from '../Shared/pendleave.service';
import { Leavehistory } from '../Shared/leavehistory';
import { Emppendleave } from '../Shared/emppendleave';

@Component({
  selector: 'app-pendingleave',
  templateUrl: './pendingleave.component.html',
  styleUrls: ['./pendingleave.component.css']
})
export class PendingleaveComponent implements OnInit {
  private empId:number;
  public repEmps: Employee[] = [];
  selectedLeaveId: number;
  selectedEmpId: number;
  setClickedRow: Function;
  pendLeaveEmpFilter: Employee;
  pendLeaveHist: Leavehistory;
  empPendLeave: Emppendleave = new Emppendleave();
  constructor(public empservice: EmpService ,
            public pendleaveservice: PendleaveService, 
            private router:Router, 
            private route:ActivatedRoute) { 
        this.setClickedRow = function(selLeaveId, selEmpId) {
          this.selectedLeaveId = selLeaveId;
          this.selectedEmpId = selEmpId;
        }
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.empId = params['empid'];
      if (this.empId) {
        this.empservice.getRepEmps(this.empId)
         .subscribe(repEmps => {
           this.repEmps = repEmps;
         });
      }
    })
  }

  loadApproveDeny(): void{
    this.pendLeaveEmpFilter  = this.repEmps.filter( a => a.emp_id == this.selectedEmpId )[0];
    this.pendLeaveHist = this.pendLeaveEmpFilter.leaveHistory.filter( b => b.leave_id == this.selectedLeaveId) [0];
    this.pendLeaveEmpFilter.leaveHistory = [];
    this.empPendLeave.empDetails = this.pendLeaveEmpFilter;
    this.empPendLeave.pendLeave = this.pendLeaveHist;
    this.pendleaveservice.setempPendLeave(this.empPendLeave);
    this.router.navigate([`/approvedenyleave/${this.empId}`]);
  }
}
