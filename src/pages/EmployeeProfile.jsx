import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { useParams } from "react-router-dom";

export default function EmployeeProfile(){

    const {id} = useParams();


    const employee = {
        id:id,
        name:"Rahul Sharma",
        email:"rahul@gmail.com",
        department:"IT",
        phone:"9876543210",
        joining:"12 January 2025",
        role:"Software Developer",
        status:"Active"
    };


    return(

        <div className="flex">


            <Sidebar />


            <div className="flex-1 bg-slate-100 min-h-screen">


                <Navbar />


                <div className="p-8">


                    <h1 className="text-4xl font-bold mb-8">
                        Employee Profile
                    </h1>



                    <div className="bg-white shadow rounded-xl p-8 max-w-xl">


                        <h2 className="text-3xl font-bold mb-5">
                            {employee.name}
                        </h2>


                        <p className="mb-3">
                            <b>Email:</b> {employee.email}
                        </p>


                        <p className="mb-3">
                            <b>Department:</b> {employee.department}
                        </p>


                        <p className="mb-3">
                            <b>Role:</b> {employee.role}
                        </p>


                        <p className="mb-3">
                            <b>Phone:</b> {employee.phone}
                        </p>


                        <p className="mb-3">
                            <b>Joining Date:</b> {employee.joining}
                        </p>


                        <p>
                            <b>Status:</b>

                            <span className="ml-3 bg-green-500 text-white px-3 py-1 rounded-full">
                                {employee.status}
                            </span>

                        </p>


                    </div>


                </div>


            </div>


        </div>

    )

}