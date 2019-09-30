import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(router, route) {
        this.router = router;
        this.route = route;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.queryParams.subscribe(function (params) {
            console.log(params[0]);
            _this.empId = params[0];
        });
    };
    DashboardComponent.prototype.loadEmpDetails = function () {
        this.router.navigate(["/empdetails/:" + this.empId]);
    };
    DashboardComponent = tslib_1.__decorate([
        Component({
            selector: 'app-dashboard',
            templateUrl: './dashboard.component.html',
            styleUrls: ['./dashboard.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [Router, ActivatedRoute])
    ], DashboardComponent);
    return DashboardComponent;
}());
export { DashboardComponent };
//# sourceMappingURL=dashboard.component.js.map