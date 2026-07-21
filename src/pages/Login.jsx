import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import API from "../API/api";


export default function Login(){

const navigate = useNavigate();


const [formData,setFormData]=useState({
email:"",
password:""
});


const handleChange=(e)=>{

setFormData({
...formData,
[e.target.name]:e.target.value
});

};



const handleLogin=async(e)=>{

e.preventDefault();


try{

const res=await API.post(
"/auth/login",
formData
);


localStorage.setItem(
"token",
res.data.token
);


localStorage.setItem(
"name",
res.data.name
);


alert("Login Successful");

navigate("/dashboard");


}
catch(err){

alert(
err.response?.data?.message ||
"Login Failed"
);

}

};



return(

<div className="min-h-screen flex bg-gradient-to-br from-slate-900 to-indigo-900">


<div className="hidden md:flex w-1/2 items-center justify-center text-white p-10">


<div>

<h1 className="text-6xl font-bold mb-5">
ELMS
</h1>


<p className="text-xl text-slate-300">
Employee Leave Management System
</p>


<p className="mt-5 text-slate-400">
Manage employees, leaves and approvals easily.
</p>


</div>


</div>



<div className="w-full md:w-1/2 flex items-center justify-center">


<form
onSubmit={handleLogin}
className="bg-white w-96 rounded-3xl shadow-2xl p-10"
>


<h2 className="text-3xl font-bold text-center mb-8">
Welcome Back
</h2>


<input

type="email"
name="email"
placeholder="Email"

onChange={handleChange}

className="w-full border p-3 rounded-xl mb-4"

required

/>


<input

type="password"
name="password"
placeholder="Password"

onChange={handleChange}

className="w-full border p-3 rounded-xl mb-6"

required

/>


<button

className="w-full bg-indigo-600 hover:bg-indigo-700 text-white p-3 rounded-xl"

>

Login

</button>



<div className="text-center mt-5">


<Link
to="/forgot-password"
className="text-red-500"
>
Forgot Password?
</Link>


<p className="mt-3">

New user?

<Link
to="/register"
className="text-indigo-600 ml-2 font-bold"
>
Create Account
</Link>

</p>


</div>


</form>


</div>


</div>

)

}