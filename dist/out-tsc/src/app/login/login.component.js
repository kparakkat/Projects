import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
var LoginComponent = /** @class */ (function () {
    function LoginComponent(formBuilder, router) {
        this.formBuilder = formBuilder;
        this.router = router;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.loginForm = this.formBuilder.group({
            empId: ['', Validators.required],
            empPwd: ['', Validators.required]
        });
    };
    LoginComponent.prototype.loginValidate = function () {
        var empId = this.loginForm.get('empId').value;
        var empPwd = this.loginForm.get('empPwd').value;
        console.log(empId);
        console.log(empPwd);
        if (empId !== null && empPwd !== null) {
            console.log(empId);
            console.log(empPwd);
            this.router.navigate(["/dashboard/:" + empId]);
        }
    };
    LoginComponent = tslib_1.__decorate([
        Component({
            selector: 'app-login',
            templateUrl: './login.component.html',
            styleUrls: ['./login.component.css']
        })
        // export class LoginComponent implements OnInit {
        //   public empid: string;
        //   constructor(private router:Router) { }
        //   ngOnInit() {
        //   }
        //   doLogin(): void{
        //      this.router.navigateByUrl('/dashboard/'+ this.empid);
        //   }
        // }
        ,
        tslib_1.__metadata("design:paramtypes", [FormBuilder, Router])
    ], LoginComponent);
    return LoginComponent;
}());
export { LoginComponent };
//# sourceMappingURL=login.component.js.map