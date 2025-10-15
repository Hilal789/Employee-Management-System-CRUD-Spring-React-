import { BrowserRouter, Routes, Route } from "react-router-dom";
import HeaderComponent from "./components/HeaderComponent";
import FooterComponents from "./components/FooterComponents";
import ListEmployeeComponents from "./components/ListEmployeeComponents";
import EmployeeComponent from "./components/EmployeeComponent";

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <BrowserRouter>
        <HeaderComponent />
        <main className="flex-grow-1 container mt-4">
          <Routes>
            <Route path="/" element={<ListEmployeeComponents />} />
            <Route path="/employees" element={<ListEmployeeComponents />} />
            <Route path="/employees/add-employee" element={<EmployeeComponent />} />
            <Route path="/add-employee" element={<EmployeeComponent />} />
            <Route path="/edit-employee/:id" element={<EmployeeComponent />} />
          </Routes>
        </main>
        <FooterComponents />
      </BrowserRouter>
    </div>
  );
}

export default App;
