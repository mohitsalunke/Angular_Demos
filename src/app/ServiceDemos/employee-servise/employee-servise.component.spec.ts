import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeServiseComponent } from './employee-servise.component';

describe('EmployeeServiseComponent', () => {
  let component: EmployeeServiseComponent;
  let fixture: ComponentFixture<EmployeeServiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeServiseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeServiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
