import * as tslib_1 from "tslib";
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmpdetailsComponent } from './empdetails/empdetails.component';
import { EmpService } from './Shared/emp.service';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib_1.__decorate([
        NgModule({
            declarations: [
                AppComponent,
                LoginComponent,
                DashboardComponent,
                EmpdetailsComponent
            ],
            imports: [
                BrowserModule,
                FormsModule,
                ReactiveFormsModule,
                AppRoutingModule,
                HttpModule
            ],
            providers: [EmpService],
            bootstrap: [AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
export { AppModule };
//# sourceMappingURL=app.module.js.map