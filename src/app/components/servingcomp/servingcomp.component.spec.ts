import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServingcompComponent } from './servingcomp.component';

describe('ServingcompComponent', () => {
  let component: ServingcompComponent;
  let fixture: ComponentFixture<ServingcompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServingcompComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServingcompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
