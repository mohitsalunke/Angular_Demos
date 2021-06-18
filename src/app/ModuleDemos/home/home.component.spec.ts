import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponentM} from './home.componentM';

describe('HomeComponentM', () => {
  let component: HomeComponentM;
  let fixture: ComponentFixture<HomeComponentM>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeComponentM ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponentM);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
