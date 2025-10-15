import React, { useEffect, useState } from "react";
import { deleteEmployee, listEmployees } from "../services/EmployeeService";
import { useNavigate } from "react-router-dom";

const ListEmployeeComponents = () => {
  const [employees, setEmployees] = useState([]);
  const navigator = useNavigate();

  useEffect(() => {
    getAllEmployees();
  }, []);

  function getAllEmployees() {
    listEmployees()
      .then((response) => {
        setEmployees(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function addNewEmployee() {
    navigator("/employees/add-employee");
  }

  function updateEmployee(id) {
    navigator(`/edit-employee/${id}`);
  }

  function removeEmployee(id) {
    if (window.confirm("Are you sure you want to delete this employee?")) {
      deleteEmployee(id)
        .then(() => getAllEmployees())
        .catch((error) => console.log(error));
    }
  }

  return (
    <div className="container mt-5">
      <div className="card shadow-lg border-0 rounded-4">
        <div className="card-header bg-primary text-white d-flex justify-content-between align-items-center rounded-top-4">
          <h3 className="mb-0">Employee Directory</h3>
          <button
            className="btn btn-light fw-semibold"
            onClick={addNewEmployee}
          >
            ➕ Add Employee
          </button>
        </div>

        <div className="card-body p-4">
          {employees.length === 0 ? (
            <p className="text-center text-muted mt-3">
              No employees found. Click <b>Add Employee</b> to create one.
            </p>
          ) : (
            <div className="table-responsive">
              <table className="table align-middle table-hover">
                <thead className="table-primary">
                  <tr>
                    <th>ID</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th className="text-center">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {employees.map((employee) => (
                    <tr key={employee.id}>
                      <td>{employee.id}</td>
                      <td>{employee.firstName}</td>
                      <td>{employee.lastName}</td>
                      <td>{employee.email}</td>
                      <td className="text-center">
                        <button
                          className="btn btn-outline-info btn-sm me-2"
                          onClick={() => updateEmployee(employee.id)}
                        >
                          ✏️ Edit
                        </button>
                        <button
                          className="btn btn-outline-danger btn-sm"
                          onClick={() => removeEmployee(employee.id)}
                        >
                          🗑️ Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ListEmployeeComponents;
