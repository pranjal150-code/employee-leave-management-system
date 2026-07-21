import { useEffect, useState } from "react";
import API from "../API/api";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

export default function LeaveHistory() {

  const [leaves, setLeaves] = useState([]);

  useEffect(() => {
    fetchLeaves();
  }, []);

  const fetchLeaves = async () => {
    try {
      const res = await API.get("/leaves");
      setLeaves(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex">

      <Sidebar />

      <div className="flex-1 bg-slate-100 min-h-screen">

        <Navbar />

        <div className="p-8">

          <h1 className="text-4xl font-bold mb-8">
            Leave History
          </h1>

          <table className="w-full bg-white shadow rounded-xl">

            <thead className="bg-slate-800 text-white">

              <tr>
                <th className="p-3">Leave Type</th>
                <th className="p-3">Start</th>
                <th className="p-3">End</th>
                <th className="p-3">Status</th>
              </tr>

            </thead>

            <tbody>

              {leaves.map((leave) => (

                <tr
                  key={leave._id}
                  className="text-center border-b"
                >

                  <td className="p-3">
                    {leave.leaveType}
                  </td>

                  <td className="p-3">
                    {new Date(leave.startDate).toLocaleDateString()}
                  </td>

                  <td className="p-3">
                    {new Date(leave.endDate).toLocaleDateString()}
                  </td>

                  <td className="p-3">
                    {leave.status}
                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
}