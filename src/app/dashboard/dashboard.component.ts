import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  private empId:number;
  constructor(private router:Router, private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.empId = params['empid'];
    })
  }

  loadEmpDetails(): void{
    this.router.navigate([`/empdetails/${this.empId}`]);
 }

 loadMngrDetails(): void{
  this.router.navigate([`/managerdetails/${this.empId}`]);
  }

  loadleaveApplications(): void{
    this.router.navigate([`/leaveapplications/${this.empId}`]);
  }

  loadPendingleaves(): void{
    this.router.navigate([`/pendingleave/${this.empId}`]);
  }
}
