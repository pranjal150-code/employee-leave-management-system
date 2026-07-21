import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../API/api";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

export default function AddEmployee() {
  const navigate = useNavigate();

  const [employee, setEmployee] = useState({
    name: "",
    email: "",
    department: "",
    position: "",
    status: "Active",
  });

  const handleChange = (e) => {
    setEmployee({
      ...employee,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await API.post("/employees", employee);

      alert("Employee Added Successfully!");

      navigate("/employees");
    } catch (err) {
      alert(err.response?.data?.message || "Failed to Add Employee");
    }
  };

  return (
    <div className="flex">
      <Sidebar />

      <div className="flex-1 bg-slate-100 min-h-screen">
        <Navbar />

        <div className="p-8">
          <h1 className="text-4xl font-bold mb-8">
            Add Employee
          </h1>

          <form
            onSubmit={handleSubmit}
            className="bg-white shadow-lg rounded-2xl p-8 max-w-2xl"
          >
            <div className="grid grid-cols-2 gap-5">

              <input
                type="text"
                name="name"
                placeholder="Employee Name"
                value={employee.name}
                onChange={handleChange}
                className="border p-3 rounded-lg"
                required
              />

              <input
                type="email"
                name="email"
                placeholder="Email"
                value={employee.email}
                onChange={handleChange}
                className="border p-3 rounded-lg"
                required
              />

              <input
                type="text"
                name="department"
                placeholder="Department"
                value={employee.department}
                onChange={handleChange}
                className="border p-3 rounded-lg"
                required
              />

              <input
                type="text"
                name="position"
                placeholder="Position"
                value={employee.position}
                onChange={handleChange}
                className="border p-3 rounded-lg"
                required
              />

              <select
                name="status"
                value={employee.status}
                onChange={handleChange}
                className="border p-3 rounded-lg"
              >
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </select>

            </div>

            <button
              type="submit"
              className="mt-6 bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg"
            >
              Save Employee
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}