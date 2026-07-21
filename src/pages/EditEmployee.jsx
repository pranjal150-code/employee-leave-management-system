import { useState } from "react";
import { useParams } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";


export default function EditEmployee(){

    const {id}=useParams();


    const [employee,setEmployee]=useState({

        name:"Rahul Sharma",
        email:"rahul@gmail.com",
        department:"IT",
        phone:"9876543210"

    });



    const handleChange=(e)=>{

        setEmployee({

            ...employee,
            [e.target.name]:e.target.value

        });

    };



    const updateEmployee=(e)=>{

        e.preventDefault();

        alert("Employee Updated Successfully!");

    };



    return(

        <div className="flex">


            <Sidebar/>


            <div className="flex-1 bg-slate-100 min-h-screen">


                <Navbar/>


                <div className="p-8">


                    <h1 className="text-4xl font-bold mb-8">
                        Edit Employee
                    </h1>



                    <form
                    onSubmit={updateEmployee}
                    className="bg-white shadow rounded-xl p-8 max-w-xl space-y-5"
                    >



                    <input

                    name="name"

                    value={employee.name}

                    onChange={handleChange}

                    className="w-full border p-3 rounded"

                    />



                    <input

                    name="email"

                    value={employee.email}

                    onChange={handleChange}

                    className="w-full border p-3 rounded"

                    />



                    <input

                    name="department"

                    value={employee.department}

                    onChange={handleChange}

                    className="w-full border p-3 rounded"

                    />



                    <input

                    name="phone"

                    value={employee.phone}

                    onChange={handleChange}

                    className="w-full border p-3 rounded"

                    />



                    <button

                    className="bg-green-600 text-white px-6 py-3 rounded"

                    >

                    Update Employee

                    </button>



                    </form>


                </div>


            </div>


        </div>


    )

}