// employee.service.ts.


//http://localhost:3000/employee/1 GET
//http://localhost:3000/employee/1 PUT
//http://localhost:3000/employee POST
//http://localhost:3000/employee/1 DELETE
//http://localhost:3000/employee GET

import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';

import {Observable, of, pipe} from "rxjs/index";
import {Employee} from "./models/employee.model";
import {map} from "rxjs/internal/operators";

@Injectable()
export class EmployeeService {

    API_URL = window.location.origin + '/bootangular';

    constructor(private httpClient: HttpClient) { }

  /**
   * Get all employees
   * @returns {Observable<Object>}
   */
    getEmployees():Observable<Employee[]> {
        //httpclient.get returns an observable<Response>.
        //use map to return observable<Employee[]> response.
        return this.httpClient.get<Employee[]>(`${this.API_URL}/employee`).pipe(map(data => { return this.transformData(data)}));
    }

  /**
   * Filtervalues
   * @param searchValues
   * @returns {Observable<any>}
   */
    filterEmployees(searchValues:any):Observable<any>{
       const httpParams = new HttpParams().set('city', searchValues.city.trim()).set('name',searchValues.name.trim()).set('department',searchValues.dept.trim()).set('gender',searchValues.gender.trim());
       return this.httpClient.get<Employee[]>(`${this.API_URL}/employee/employeesearch`,{params: httpParams}).pipe(map(data => { return this.transformData(data)}));
    }

  /**
   * Transforn returned data.
   * @param data
   * @returns {Employee[]}
   */
    transformData(data:any){
      let dataTransform:Employee[]=[];
      let i:number=0;
      for (let item of data){
        let employee = {} as Employee;
        employee.hireDate = new Date(item.hireDate);
        employee.id = item.id;
        employee.name = item.name;
        employee.city = item.city
        employee.department = item.department;
        employee.gender = item.gender;
        dataTransform.push(employee)
      }
      return dataTransform;
    }

   /**
   * Get employee by ID
   * @param id
   * @returns {Observable<any>}
   */
    getEmployee(id): Observable<any> {
      return this.httpClient.get(`${this.API_URL}/employee/`+id);
    }

  /**
   * Delete employee by ID
   * @param id
   * @returns {Observable<any>}
   */
    deleteEmployee(id):Observable<any>{
        return this.httpClient.delete(`${this.API_URL}/employee/`+id)
    }


  /**
   * Add new employee
   * @param employee
   * @returns {Observable<any>}
   */
  addEmployee(employee):Observable<any>{
         return this.httpClient.post<Employee>(`${this.API_URL}/employee`, employee )
     }


  /**
   * Update employee
   * @param employee
   * @returns {Observable<any>}
   */
  updateEmployee(employee):Observable<any>{

    return this.httpClient.put<Employee>(`${this.API_URL}/employee/`+employee.id, employee )

  }

}

