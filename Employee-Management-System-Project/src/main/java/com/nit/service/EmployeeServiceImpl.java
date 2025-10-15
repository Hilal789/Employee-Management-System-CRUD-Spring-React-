package com.nit.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.nit.dto.EmployeeDto;
import com.nit.entity.Employee;
import com.nit.exception.ResourceNotFoundException;
import com.nit.mapper.EmployeeMapper;
import com.nit.repository.EmployeeRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class EmployeeServiceImpl implements EmployeeService {

	private final EmployeeRepository employeeRepository;

	@Override
	public EmployeeDto createEmployee(EmployeeDto employeeDto) {

		Employee employee = EmployeeMapper.mapToEmployee(employeeDto);
		Employee save = employeeRepository.save(employee);

		return EmployeeMapper.mapToEmployeeDto(save);
	}

	@Override
	public EmployeeDto getEmployeeById(Long id) {

		Employee employee = employeeRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Employee is not exist with given id: " + id));

		return EmployeeMapper.mapToEmployeeDto(employee);
	}

	@Override
	public List<EmployeeDto> getAllEmployees() {
		return employeeRepository.findAll().stream().map(EmployeeMapper::mapToEmployeeDto).collect(Collectors.toList());
	}

	@Override
	public EmployeeDto updateEmployee(Long id, EmployeeDto updateEmployee) {

		Employee employee = employeeRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Employee is not exists with id : " + id));

		employee.setFirstName(updateEmployee.getFirstName());
		employee.setLastName(updateEmployee.getLastName());
		employee.setEmail(updateEmployee.getEmail());
		
		Employee save = employeeRepository.save(employee);
		
		return EmployeeMapper.mapToEmployeeDto(save);

	}

	@Override
	public void deleteEmployee(Long id) {
		
		Employee employee = employeeRepository.findById(id).orElseThrow(()->new ResourceNotFoundException("Employee is not exist with given id : "+id));

		
		employeeRepository.deleteById(id);
	
	}

}
