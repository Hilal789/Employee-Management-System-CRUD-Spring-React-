package com.nit.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.nit.dto.EmployeeDto;
import com.nit.service.EmployeeService;

import lombok.AllArgsConstructor;



@CrossOrigin("*")
@RestController
@RequestMapping("/api/employees")
@AllArgsConstructor
public class EmployeeController {
	
	private final EmployeeService employeeService;
	
	@PostMapping
	public ResponseEntity<EmployeeDto> createEmployee(@RequestBody EmployeeDto employeeDto){
		EmployeeDto employee = employeeService.createEmployee(employeeDto);
		
		return new ResponseEntity<>(employee,HttpStatus.CREATED);
	}
	
	
	@GetMapping("/{id}")
	public ResponseEntity<EmployeeDto> getEmloyeeById(@PathVariable("id") Long id){
		EmployeeDto employeeById = employeeService.getEmployeeById(id);
		
		return ResponseEntity.ok(employeeById);
	}
	
	
	@GetMapping
	public ResponseEntity<List<EmployeeDto>> getAllEmployees(){
		List<EmployeeDto> allEmployees = employeeService.getAllEmployees();
		
		return ResponseEntity.ok(allEmployees);
	}
		
		
	@PutMapping("/{id}")
	public ResponseEntity<EmployeeDto> updateEmployee(@PathVariable("id") Long id,
	                                                  @RequestBody EmployeeDto updateEmployeeDto) {
	    EmployeeDto employee = employeeService.updateEmployee(id, updateEmployeeDto);
	    return ResponseEntity.ok(employee);
	}
	
	@DeleteMapping("{id}")
	public ResponseEntity<String>deleteEmployee(@PathVariable("id") Long id){
		employeeService.deleteEmployee(id);
		
		return ResponseEntity.ok("Employee delete sucessfully!");
	}
	

}
