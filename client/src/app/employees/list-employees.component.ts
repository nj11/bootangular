import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee.model';

// Import EmployeeService
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {
  employees: Employee[] = [];
  selectedEmployees: Employee[];
  cols: any[];
  searchText:String;

  selectedEmployee: Employee;
  displayDialog: boolean;
  employee: Employee ;
  newEmployee: boolean;

  constructor(private _employeeService: EmployeeService) { }

  /**
   * NgOnInit
   */
  ngOnInit() {
    this.getEmployees();
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
   * Get all employees
   */
  public getEmployees() {
    this._employeeService.getEmployees()
      .subscribe((data: Employee[]) => {
      this.employees = data;
    });
  }

  /**
   * Delete employee
   * @param employee
   */
  delete(employee){
    let index = this.employees.indexOf(this.selectedEmployee);
    //this.employees = this.employees.filter((val, i) => i != index);
    this._employeeService.deleteEmployee(this.selectedEmployee.id).subscribe(
      (msg) => this.getEmployees(),
      (error) => console.log(error)
    );
    this.employee = null;
    this.displayDialog = false;
  }

  /**
   public sortByNumber = (a: any) => {
    return new Function('a', 'return +a.' + a + '.valueOf()');
  } */

  /**
   * Show Add Dialog
   */
  showDialogToAdd() {
    this.newEmployee = true;
    this.employee = {} as Employee;
    this.displayDialog = true;
  }

  /**
   * Save (update or add) employee
   */
  save() {
    let employess = [...this.employees];

    if (this.newEmployee){
      //this.employees.push(this.employee);
      console.log(this.employee.name)
      console.log(this.employee.hireDate)

      this._employeeService.addEmployee(this.employee).subscribe(
        (msg) => this.getEmployees(),
        (error) => console.log("Error during add " + error)
      );
    }
    else{
      this._employeeService.updateEmployee(this.employee).subscribe(
        (msg) => console.log(msg),
        (error) => console.log(error)
      );
      employess[this.employees.indexOf(this.selectedEmployee)] = this.employee

    }
    this.employees = employess;
    this.employee = null;
    this.displayDialog = false;
  }

  /**
   * Update selected row.
   * @param event
   */
  onRowSelect(event) {
    this.newEmployee = false;
    this.employee = this.cloneEmployee(event.data);
    this.displayDialog = true;
  }

  /**
   * Clone emp obj
   * @param {Employee} c
   * @returns {Employee}
   */
  cloneEmployee(c: Employee): Employee {
    let employee = {} as Employee;
    for (let prop in c) {
      employee[prop] = c[prop];
    }
    //p-calendar workaround.
    //https://github.com/primefaces/primeng/issues/5074
    employee.hireDate = new Date(employee.hireDate)

    return employee;
  }

  exportCSV(dataTable) {
    dataTable.exportCSV();
  }




}
