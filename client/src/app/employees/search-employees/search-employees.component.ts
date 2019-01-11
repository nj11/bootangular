import { Component, OnInit } from '@angular/core';
import {Employee} from "../../models/employee.model";

import {EmployeeService} from "../../employee.service";

@Component({
  selector: 'app-search-employees',
  templateUrl: './search-employees.component.html',
  styleUrls: ['./search-employees.component.css']
})

export class SearchEmployeesComponent implements OnInit {
  employees: Employee[] = [];
  cols: any[];
  departments: any[] = [];

  constructor(private _employeeService: EmployeeService) { }

  ngOnInit() {

    //TODO:In future read this from the database using rest endpoint.
    this.departments = [
      { value: '', label: "Pls Select" },
      { value: 'HR', label: "HR" },
      { value: 'IT', label: "IT" },
      { value: 'CSR', label: "CSR" },
      { value: 'Sales', label: "Sales" },
      { value: 'Acctg', label: "Acctg" }
    ]

    this.cols = [
      { field: 'id', header: 'ID' },
      { field: 'name', header: 'Name' },
      { field: 'city', header: 'City' },
      { field: 'gender', header: 'Gender' },
      { field: 'department', header: 'Department' },
      { field: 'hireDate', header: 'Hire Date' }
    ];
  }

  /**
   * Search form submit handler.
   * @param formValues
   */
  submitForm(formValues: any) {

    this._employeeService.filterEmployees(formValues)
      .subscribe((data: Employee[]) => {
        this.employees = data;
      });
  }



}
