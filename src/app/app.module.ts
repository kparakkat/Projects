import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmpdetailsComponent } from './empdetails/empdetails.component';
import { EmpService } from './Shared/emp.service';
import { ManagerdetailsComponent } from './managerdetails/managerdetails.component';
import { LeaveapplicationsComponent } from './leaveapplications/leaveapplications.component';
import { ApplyleaveComponent } from './applyleave/applyleave.component';
import { PendingleaveComponent } from './pendingleave/pendingleave.component';
import { ApprovedenyleaveComponent } from './approvedenyleave/approvedenyleave.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    EmpdetailsComponent,
    ManagerdetailsComponent,
    LeaveapplicationsComponent,
    ApplyleaveComponent,
    PendingleaveComponent,
    ApprovedenyleaveComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpModule,
    HttpClientModule
  ],
  providers: [EmpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
