import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaveapplicationsComponent } from './leaveapplications.component';

describe('LeaveapplicationsComponent', () => {
  let component: LeaveapplicationsComponent;
  let fixture: ComponentFixture<LeaveapplicationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeaveapplicationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeaveapplicationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
