import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchEmployeesComponent } from './search-employees.component';

describe('SearchEmployeesComponent', () => {
  let component: SearchEmployeesComponent;
  let fixture: ComponentFixture<SearchEmployeesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchEmployeesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchEmployeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
