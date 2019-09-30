import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { EmpService } from '../Shared/emp.service';
import { ActivatedRoute } from '@angular/router';
var EmpdetailsComponent = /** @class */ (function () {
    function EmpdetailsComponent(empservice, route) {
        this.empservice = empservice;
        this.route = route;
        this.empDetails = {};
    }
    EmpdetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.queryParams.subscribe(function (params) {
            console.log(params[0]);
            _this.empId = params[0];
            if (_this.empId) {
                _this.empservice.getEmp(_this.empId)
                    .subscribe(function (empDetails) {
                    _this.empDetails = empDetails;
                });
            }
        });
    };
    EmpdetailsComponent = tslib_1.__decorate([
        Component({
            selector: 'app-empdetails',
            templateUrl: './empdetails.component.html',
            styleUrls: ['./empdetails.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [EmpService, ActivatedRoute])
    ], EmpdetailsComponent);
    return EmpdetailsComponent;
}());
export { EmpdetailsComponent };
//# sourceMappingURL=empdetails.component.js.map