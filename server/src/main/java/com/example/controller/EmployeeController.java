package com.example.controller;

import java.util.List;

import com.example.models.Employee;
import com.example.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController //Shorthand for @Controller and @ResponseBody rolled together
public class EmployeeController {

    @Autowired
    EmployeeService employeeService;

    @GetMapping("/employee")
    public ResponseEntity list() {
        List<Employee> employees = employeeService.getEmployeeList();
        return  new ResponseEntity(employees, HttpStatus.OK);
    }

     @DeleteMapping("/employee/{id}")
     public void delete(@PathVariable int id) {
        employeeService.deleteEmployee(new Integer(id));
     }

     @PutMapping("/employee/{id}")
     public void update(@RequestBody Employee employee) {
        employeeService.saveEmployee(employee);

     }

     @GetMapping("/employee/{id}")
     public ResponseEntity<Employee> getOne(@PathVariable int id){
        Employee e = employeeService.findById(new Integer(id));
        return ResponseEntity.accepted().body(e);
     }

     @PostMapping("/employee")
     public void saveUser(@RequestBody Employee employee){
        employeeService.saveEmployee(employee);

     }

}
