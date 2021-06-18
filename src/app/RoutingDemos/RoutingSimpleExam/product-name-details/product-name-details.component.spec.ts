import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductNameDetailsComponent } from './product-name-details.component';

describe('ProductNameDetailsComponent', () => {
  let component: ProductNameDetailsComponent;
  let fixture: ComponentFixture<ProductNameDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductNameDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductNameDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
