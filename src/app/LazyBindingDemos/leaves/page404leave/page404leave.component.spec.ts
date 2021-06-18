import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Page404leaveComponent } from './page404leave.component';

describe('Page404leaveComponent', () => {
  let component: Page404leaveComponent;
  let fixture: ComponentFixture<Page404leaveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Page404leaveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Page404leaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
