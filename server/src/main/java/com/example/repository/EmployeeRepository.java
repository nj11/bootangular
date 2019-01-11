package com.example.repository;

import com.example.models.Employee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.stereotype.Repository;

@RepositoryRestResource
public interface EmployeeRepository extends JpaRepository<Employee,Integer> {

}
