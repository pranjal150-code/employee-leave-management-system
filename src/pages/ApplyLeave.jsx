import { useState } from "react";
import API from "../API/api";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

export default function ApplyLeave() {
  const [leave, setLeave] = useState({
    employeeId: "",
    leaveType: "",
    startDate: "",
    endDate: "",
    reason: "",
  });

  const handleChange = (e) => {
    setLeave({
      ...leave,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await API.post("/leaves", leave);

      alert("Leave Applied Successfully");

      setLeave({
        employeeId: "",
        leaveType: "",
        startDate: "",
        endDate: "",
        reason: "",
      });
    } catch (err) {
      alert(err.response?.data?.message || "Failed to Apply Leave");
    }
  };

  return (
    <div className="flex">
      <Sidebar />

      <div className="flex-1 bg-slate-100 min-h-screen">
        <Navbar />

        <div className="p-8">
          <h1 className="text-4xl font-bold mb-8">
            Apply Leave
          </h1>

          <form
            onSubmit={handleSubmit}
            className="bg-white shadow-xl rounded-2xl p-8 max-w-2xl"
          >
            <div className="grid grid-cols-2 gap-5">

              <input
                type="text"
                name="employeeId"
                placeholder="Employee ID"
                value={leave.employeeId}
                onChange={handleChange}
                className="border p-3 rounded-lg"
                required
              />

              <select
                name="leaveType"
                value={leave.leaveType}
                onChange={handleChange}
                className="border p-3 rounded-lg"
                required
              >
                <option value="">Select Leave</option>
                <option value="Sick Leave">Sick Leave</option>
                <option value="Casual Leave">Casual Leave</option>
                <option value="Earned Leave">Earned Leave</option>
              </select>

              <input
                type="date"
                name="startDate"
                value={leave.startDate}
                onChange={handleChange}
                className="border p-3 rounded-lg"
                required
              />

              <input
                type="date"
                name="endDate"
                value={leave.endDate}
                onChange={handleChange}
                className="border p-3 rounded-lg"
                required
              />

            </div>

            <textarea
              name="reason"
              placeholder="Reason"
              value={leave.reason}
              onChange={handleChange}
              className="border p-3 rounded-lg w-full mt-5"
              rows="4"
            />

            <button
              type="submit"
              className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg"
            >
              Apply Leave
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}