import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import API from "../API/api";


export default function ForgotPassword(){


const navigate = useNavigate();


const [email,setEmail] = useState("");



const handleSubmit = async(e)=>{


e.preventDefault();



try{


const res = await API.post(
"/auth/forgot-password",
{
email
}
);



alert(res.data.message);



navigate("/reset-password");



}
catch(err){


alert(
err.response?.data?.message ||
"Something went wrong"
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

Forgot Password

</h1>



<input

type="email"

placeholder="Enter Registered Email"

value={email}

onChange={(e)=>setEmail(e.target.value)}

className="border p-3 w-full rounded mb-5"

required

/>



<button

className="bg-blue-600 hover:bg-blue-700 text-white w-full p-3 rounded"

>

Verify Email

</button>



<p className="text-center mt-5">

<Link

to="/"

className="text-blue-600"

>

Back to Login

</Link>

</p>



</form>


</div>


)


}