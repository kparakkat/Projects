import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmpdetailsComponent } from './empdetails/empdetails.component';
import { ManagerdetailsComponent } from './managerdetails/managerdetails.component';
import { LeaveapplicationsComponent } from './leaveapplications/leaveapplications.component';
import { ApplyleaveComponent } from './applyleave/applyleave.component';
import { PendingleaveComponent } from './pendingleave/pendingleave.component';
import { ApprovedenyleaveComponent } from './approvedenyleave/approvedenyleave.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'dashboard/:empid',
    component: DashboardComponent
  },
  {
    path: 'empdetails/:empid',
    component: EmpdetailsComponent
  },
  {
    path: 'managerdetails/:empid',
    component: ManagerdetailsComponent
  },
  {
    path: 'leaveapplications/:empid',
    component: LeaveapplicationsComponent
  },
  {
    path: 'applyleave/:empid',
    component: ApplyleaveComponent
  },
  {
    path: 'pendingleave/:empid',
    component: PendingleaveComponent
  },
  {
    path: 'approvedenyleave/:empid',
    component: ApprovedenyleaveComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
