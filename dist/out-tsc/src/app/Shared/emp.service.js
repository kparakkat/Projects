import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';
var EmpService = /** @class */ (function () {
    function EmpService(http) {
        this.http = http;
    }
    EmpService.prototype.getEmp = function (id) {
        return this.makeRequest("getById/" + id);
    };
    EmpService.prototype.makeRequest = function (path) {
        var params = new URLSearchParams();
        params.set('id', '1');
        var url = "http://localhost:9090/emp/" + path;
        return this.http.get(url, { search: params })
            .pipe(map(function (res) { return res.json(); }));
    };
    EmpService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [Http])
    ], EmpService);
    return EmpService;
}());
export { EmpService };
//# sourceMappingURL=emp.service.js.map