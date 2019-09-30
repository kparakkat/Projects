import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovedenyleaveComponent } from './approvedenyleave.component';

describe('ApprovedenyleaveComponent', () => {
  let component: ApprovedenyleaveComponent;
  let fixture: ComponentFixture<ApprovedenyleaveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApprovedenyleaveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApprovedenyleaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
