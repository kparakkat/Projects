import { Component, OnInit } from '@angular/core';
import { EmpService } from '../Shared/emp.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Employee } from '../Shared/employee';

@Component({
  selector: 'app-empdetails',
  templateUrl: './empdetails.component.html',
  styleUrls: ['./empdetails.component.css']
})
export class EmpdetailsComponent implements OnInit {
  private empId:number;
  public empDetails: Employee;
  constructor(public empservice:EmpService, private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.empId = params['empid'];
       if (this.empId) {
         this.empservice.getEmp(this.empId)
         .subscribe(empDetails => {
           this.empDetails = empDetails;
         });
       }
    })
  }

}
