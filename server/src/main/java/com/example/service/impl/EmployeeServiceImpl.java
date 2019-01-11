package com.example.service.impl;

import com.example.models.Employee;
import com.example.repository.EmployeeRepository;
import com.example.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class EmployeeServiceImpl implements EmployeeService{

    private EmployeeRepository employeeRepository;

    @Autowired
    public void setEmployeeRepository(EmployeeRepository employeeRepository) {
        this.employeeRepository = employeeRepository;
    }

    @Override
    public List<Employee> getEmployeeList() {
            List<Employee> employees = employeeRepository.findAll();
            return  employees;
    }

    @Override
    public void deleteEmployee(Integer id){
      Employee employee = employeeRepository.getOne(id);
       employeeRepository.delete(employee);
    }

    @Override
    public void saveEmployee(Employee e){
        employeeRepository.save(e);
    }

    @Override
    public Employee findById(Integer id){
        Employee employee = employeeRepository.getOne(id);
        return  employee;
    }

}
