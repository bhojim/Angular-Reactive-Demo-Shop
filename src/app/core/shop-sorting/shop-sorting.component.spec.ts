import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopSortingComponent } from './shop-sorting.component';

describe('ShopSortingComponent', () => {
  let component: ShopSortingComponent;
  let fixture: ComponentFixture<ShopSortingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopSortingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopSortingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
