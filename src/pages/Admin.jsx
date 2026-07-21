import { useEffect, useState } from "react";
import API from "../API/api";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

export default function Admin() {

  const [leaves, setLeaves] = useState([]);

  const loadLeaves = async () => {
    const res = await API.get("/leaves");
    setLeaves(res.data);
  };

  useEffect(() => {
    loadLeaves();
  }, []);

  const approve = async (id) => {
    await API.put(`/leaves/${id}/approve`);
    loadLeaves();
  };

  const reject = async (id) => {
    await API.put(`/leaves/${id}/reject`);
    loadLeaves();
  };

  return (
    <div className="flex">

      <Sidebar />

      <div className="flex-1 bg-slate-100 min-h-screen">

        <Navbar />

        <div className="p-8">

          <h1 className="text-4xl font-bold mb-8">
            Admin Panel
          </h1>

          <table className="w-full bg-white shadow rounded-xl">

            <thead className="bg-slate-900 text-white">

              <tr>
                <th className="p-3">Leave Type</th>
                <th className="p-3">Status</th>
                <th className="p-3">Actions</th>
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
                    {leave.status}
                  </td>

                  <td className="p-3">

                    <button
                      onClick={() => approve(leave._id)}
                      className="bg-green-600 text-white px-4 py-2 rounded mr-2"
                    >
                      Approve
                    </button>

                    <button
                      onClick={() => reject(leave._id)}
                      className="bg-red-600 text-white px-4 py-2 rounded"
                    >
                      Reject
                    </button>

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