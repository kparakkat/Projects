import { TestBed } from '@angular/core/testing';
import { EmpService } from './emp.service';
describe('EmpService', function () {
    beforeEach(function () { return TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = TestBed.get(EmpService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=emp.service.spec.js.map