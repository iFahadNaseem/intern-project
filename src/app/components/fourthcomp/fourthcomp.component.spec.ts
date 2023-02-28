import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FourthcompComponent } from './fourthcomp.component';

describe('FourthcompComponent', () => {
  let component: FourthcompComponent;
  let fixture: ComponentFixture<FourthcompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FourthcompComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FourthcompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
