import {useState} from "react";
import {useNavigate,Link} from "react-router-dom";
import API from "../API/api";


export default function Register(){


const navigate=useNavigate();


const [form,setForm]=useState({

name:"",
email:"",
password:"",
role:"employee"

});


const change=(e)=>{

setForm({
...form,
[e.target.name]:e.target.value
});

};



const submit=async(e)=>{

e.preventDefault();


try{

await API.post(
"/auth/register",
form
);


alert("Account Created");

navigate("/");


}
catch(err){

alert(
err.response?.data?.message ||
"Registration Failed"
);

}

};



return(

<div className="min-h-screen bg-gradient-to-r from-emerald-600 to-cyan-600 flex items-center justify-center">


<form

onSubmit={submit}

className="bg-white p-10 rounded-3xl shadow-2xl w-96"

>


<h1 className="text-3xl font-bold text-center mb-8">

Create Account

</h1>



<input

name="name"
placeholder="Full Name"

onChange={change}

className="border p-3 rounded-xl w-full mb-4"

required

/>


<input

name="email"
type="email"
placeholder="Email"

onChange={change}

className="border p-3 rounded-xl w-full mb-4"

required

/>


<input

name="password"
type="password"
placeholder="Password"

onChange={change}

className="border p-3 rounded-xl w-full mb-4"

required

/>


<button

className="bg-emerald-600 text-white w-full p-3 rounded-xl"

>

Register

</button>



<p className="text-center mt-5">

Already registered?

<Link
to="/"
className="text-emerald-600 ml-2 font-bold"
>
Login
</Link>


</p>


</form>


</div>

)

}