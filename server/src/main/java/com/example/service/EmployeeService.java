package com.example.service;

import com.example.models.Employee;

import java.util.List;

public interface EmployeeService {
    List<Employee> getEmployeeList();

    void deleteEmployee(Integer id);

    void saveEmployee(Employee e);

    Employee findById(Integer id);

}
