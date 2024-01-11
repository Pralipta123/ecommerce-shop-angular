import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllProductByCatagoryComponent } from './view-all-product-by-catagory.component';

describe('ViewAllProductByCatagoryComponent', () => {
  let component: ViewAllProductByCatagoryComponent;
  let fixture: ComponentFixture<ViewAllProductByCatagoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewAllProductByCatagoryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewAllProductByCatagoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
