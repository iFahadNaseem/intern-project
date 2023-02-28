import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastcompComponent } from './lastcomp.component';

describe('LastcompComponent', () => {
  let component: LastcompComponent;
  let fixture: ComponentFixture<LastcompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LastcompComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LastcompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
