import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutsourcecompComponent } from './outsourcecomp.component';

describe('OutsourcecompComponent', () => {
  let component: OutsourcecompComponent;
  let fixture: ComponentFixture<OutsourcecompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutsourcecompComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OutsourcecompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
