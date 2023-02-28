import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogscompComponent } from './blogscomp.component';

describe('BlogscompComponent', () => {
  let component: BlogscompComponent;
  let fixture: ComponentFixture<BlogscompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogscompComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogscompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
