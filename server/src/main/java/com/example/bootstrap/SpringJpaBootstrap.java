package com.example.bootstrap;

import com.example.models.Employee;
import com.example.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationEvent;
import org.springframework.context.ApplicationListener;
import org.springframework.context.event.ContextRefreshedEvent;
import org.springframework.context.event.ContextStartedEvent;
import org.springframework.stereotype.Component;

import java.util.Date;

@Component
public class SpringJpaBootstrap implements ApplicationListener<ApplicationEvent> {
    private EmployeeRepository employeeRepository;


    @Autowired
    public void setEmployeeRepository(EmployeeRepository employeeRepository) {
        this.employeeRepository = employeeRepository;
    }

    @Override
    public void onApplicationEvent(ApplicationEvent applicationEvent) {
        // process event
        if(applicationEvent instanceof ContextRefreshedEvent) {
                loadData();
        }

    }


    private  void loadData() {
        Employee employee1 = new Employee(1, "John Smith", "Los Angeles", "M", "IT", new Date());
        Employee employee2 = new Employee(2, "Derek Smith", "Chicago", "M", "IT", new Date());
        Employee employee3 = new Employee(3, "Mark Taylor", "Los Angeles", "M", "IT", new Date());
        Employee employee4 = new Employee(4, "Andrew White", "Atlanta", "M", "IT", new Date());
        Employee employee5 = new Employee(5, "Bob White", "Atlanta", "M", "IT", new Date());
        Employee employee6 = new Employee(6, "Matthew Clark", "San Franciso", "M", "IT", new Date());
        Employee employee7 = new Employee(7, "Eric Clark", "San Franciso", "M", "IT", new Date());
        Employee employee8 = new Employee(8, "Lisa Rose", "San Franciso", "F", "IT", new Date());
        Employee employee9 = new Employee(9, "John Smith", "New York", "M", "IT", new Date());
        Employee employee10 = new Employee(10, "Hansen Smith", "New York", "M", "IT", new Date());
        Employee employee11 = new Employee(11, "Shania Johnson", "New Jersey", "F", "IT", new Date());
        Employee employee12 = new Employee(12, "Kelly Smith", "New Jersey", "F", "IT", new Date());
        Employee employee13 = new Employee(13, "Judy Moore", "New Jersey", "F", "IT", new Date());
        Employee employee14 = new Employee(14, "Caroline Parker", "Seattle", "F", "IT", new Date());
        Employee employee15 = new Employee(15, "Alicia Robin", "Seattle", "M", "IT", new Date());
        Employee employee16 = new Employee(16, "John Smith", "Seattle", "F", "IT", new Date());
        Employee employee17 = new Employee(17, "Eric Smith", "Miami", "M", "IT", new Date());
        Employee employee18 = new Employee(18, "Christopher Smith", "Miami", "M", "IT", new Date());
        Employee employee19 = new Employee(19, "Rachel Stone", "Miami", "F", "IT", new Date());
        Employee employee20 = new Employee(20, "Christina Joseph", "Miami", "F", "IT", new Date());

        employeeRepository.save(employee1);
        employeeRepository.save(employee2);
        employeeRepository.save(employee3);
        employeeRepository.save(employee4);
        employeeRepository.save(employee5);
        employeeRepository.save(employee6);
        employeeRepository.save(employee7);
        employeeRepository.save(employee8);
        employeeRepository.save(employee9);
        employeeRepository.save(employee10);
        employeeRepository.save(employee11);
        employeeRepository.save(employee12);
        employeeRepository.save(employee13);
        employeeRepository.save(employee14);
        employeeRepository.save(employee15);
        employeeRepository.save(employee16);
        employeeRepository.save(employee17);
        employeeRepository.save(employee18);
        employeeRepository.save(employee19);
        employeeRepository.save(employee20);
    }
}
