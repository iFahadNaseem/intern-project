import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxcompComponent } from './boxcomp.component';

describe('BoxcompComponent', () => {
  let component: BoxcompComponent;
  let fixture: ComponentFixture<BoxcompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoxcompComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoxcompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
