import { Component, OnInit } from '@angular/core';
import { EmpService } from '../Shared/emp.service';
import { ActivatedRoute } from '@angular/router';
import { Employee } from '../Shared/employee';

@Component({
  selector: 'app-managerdetails',
  templateUrl: './managerdetails.component.html',
  styleUrls: ['./managerdetails.component.css']
})
export class ManagerdetailsComponent implements OnInit {
  private empId:number;
  public mngrDetails: Employee;
  constructor(public empservice:EmpService, private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.empId = params['empid'];
       if (this.empId) {
         this.empservice.getEmpMngr(this.empId)
         .subscribe(empDetails => {
           this.mngrDetails = empDetails;
         });
       }
    })

  }

}
