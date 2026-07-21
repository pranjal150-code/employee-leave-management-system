import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../API/api";


export default function ResetPassword(){

    const navigate = useNavigate();


    const [formData,setFormData] = useState({

        email:"",
        newPassword:""

    });



    const handleChange=(e)=>{

        setFormData({

            ...formData,

            [e.target.name]:e.target.value

        });

    };



    const handleSubmit=async(e)=>{

        e.preventDefault();


        try{


            const res = await API.put(
                "/auth/reset-password",
                formData
            );


            alert(res.data.message);


            navigate("/");


        }
        catch(err){

            alert(
                err.response?.data?.message ||
                "Password reset failed"
            );

        }

    };



    return(

        <div className="flex justify-center items-center h-screen bg-slate-100">


            <form

            onSubmit={handleSubmit}

            className="bg-white shadow-xl rounded-xl p-8 w-96"

            >


            <h1 className="text-3xl font-bold text-center mb-6">

                Reset Password

            </h1>



            <input

            type="email"

            name="email"

            placeholder="Registered Email"

            value={formData.email}

            onChange={handleChange}

            className="border p-3 w-full rounded mb-4"

            required

            />



            <input

            type="password"

            name="newPassword"

            placeholder="New Password"

            value={formData.newPassword}

            onChange={handleChange}

            className="border p-3 w-full rounded mb-5"

            required

            />



            <button

            className="bg-green-600 hover:bg-green-700 text-white w-full p-3 rounded"

            >

            Update Password

            </button>



            </form>


        </div>

    )

}