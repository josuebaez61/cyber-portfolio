import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SomeCodeComponent } from './some-code.component';

describe('SomeCodeComponent', () => {
  let component: SomeCodeComponent;
  let fixture: ComponentFixture<SomeCodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SomeCodeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SomeCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
