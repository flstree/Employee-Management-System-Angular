import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeedataComponent } from './employeedata.component';

describe('EmployeedataComponent', () => {
  let component: EmployeedataComponent;
  let fixture: ComponentFixture<EmployeedataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeedataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeedataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
