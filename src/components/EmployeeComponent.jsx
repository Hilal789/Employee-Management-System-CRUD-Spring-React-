import React, { useEffect, useState } from "react";
import {
  createEmployee,
  getEmployee,
  updateEmployee,
} from "../services/EmployeeService";
import { useNavigate, useParams } from "react-router-dom";

const EmployeeComponent = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const { id } = useParams();
  const navigator = useNavigate();

  const [errors, setError] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  useEffect(() => {
    if (id) {
      getEmployee(id)
        .then((response) => {
          setFirstName(response.data.firstName);
          setLastName(response.data.lastName);
          setEmail(response.data.email);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [id]);

  const saveOrUpdate = (e) => {
    e.preventDefault();

    if (validateForm()) {
      const employee = { firstName, lastName, email };

      if (id) {
        updateEmployee(id, employee)
          .then(() => navigator("/employees"))
          .catch((error) => console.error(error));
      } else {
        createEmployee(employee)
          .then(() => navigator("/employees"))
          .catch((error) => console.error(error));
      }
    }
  };

  function validateForm() {
    let valid = true;
    const errorCopy = { ...errors };

    if (firstName.trim()) {
      errorCopy.firstName = "";
    } else {
      errorCopy.firstName = "First name is required";
      valid = false;
    }

    if (lastName.trim()) {
      errorCopy.lastName = "";
    } else {
      errorCopy.lastName = "Last name is required";
      valid = false;
    }

    if (email.trim()) {
      errorCopy.email = "";
    } else {
      errorCopy.email = "Email is required";
      valid = false;
    }

    setError(errorCopy);
    return valid;
  }

  function pageTitle() {
    return (
      <h3 className="text-center mb-4 fw-semibold text-primary">
        {id ? "Update Employee" : "Add New Employee"}
      </h3>
    );
  }

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow-lg border-0 rounded-4">
            <div className="card-body p-4">
              {pageTitle()}

              <form>
                <div className="form-group mb-3">
                  <label className="form-label fw-semibold">First Name</label>
                  <input
                    type="text"
                    placeholder="Enter employee's first name"
                    value={firstName}
                    className={`form-control ${
                      errors.firstName ? "is-invalid" : ""
                    }`}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                  {errors.firstName && (
                    <div className="invalid-feedback">{errors.firstName}</div>
                  )}
                </div>

                <div className="form-group mb-3">
                  <label className="form-label fw-semibold">Last Name</label>
                  <input
                    type="text"
                    placeholder="Enter employee's last name"
                    value={lastName}
                    className={`form-control ${
                      errors.lastName ? "is-invalid" : ""
                    }`}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                  {errors.lastName && (
                    <div className="invalid-feedback">{errors.lastName}</div>
                  )}
                </div>

                <div className="form-group mb-4">
                  <label className="form-label fw-semibold">Email</label>
                  <input
                    type="email"
                    placeholder="Enter employee's email"
                    value={email}
                    className={`form-control ${
                      errors.email ? "is-invalid" : ""
                    }`}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  {errors.email && (
                    <div className="invalid-feedback">{errors.email}</div>
                  )}
                </div>

                <div className="d-flex justify-content-between">
                  <button
                    className="btn btn-success px-4"
                    onClick={saveOrUpdate}
                  >
                    💾 {id ? "Update" : "Submit"}
                  </button>
                  <button
                    type="button"
                    className="btn btn-secondary px-4"
                    onClick={() => navigator("/employees")}
                  >
                    ← Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeComponent;
