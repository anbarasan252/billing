import { ComponentFixture, TestBed } from '@angular/core/testing';

import { McodingComponent } from './mcoding.component';

describe('McodingComponent', () => {
  let component: McodingComponent;
  let fixture: ComponentFixture<McodingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ McodingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(McodingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
