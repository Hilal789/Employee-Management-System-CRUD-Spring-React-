package com.nit.service;

import java.util.List;

import com.nit.dto.EmployeeDto;

public interface EmployeeService {
	
	EmployeeDto createEmployee(EmployeeDto employeeDto);
	
	EmployeeDto getEmployeeById(Long id);
	
	List<EmployeeDto> getAllEmployees();
	
	EmployeeDto updateEmployee(Long id,EmployeeDto updateEmployee);
	
	void deleteEmployee(Long id);
}
