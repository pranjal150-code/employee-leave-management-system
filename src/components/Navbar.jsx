import { useNavigate } from "react-router-dom";


export default function Navbar(){


const navigate = useNavigate();


const logout = ()=>{


localStorage.removeItem("token");

localStorage.removeItem("name");

localStorage.removeItem("role");


alert("Logout Successfully");


navigate("/");


};



return(


<div className="h-20 bg-white shadow flex justify-between items-center px-8">


<div>


<h2 className="text-2xl font-bold text-slate-800">

Employee Leave Management

</h2>


<p className="text-sm text-slate-500">

Manage workforce efficiently

</p>


</div>




<div className="flex items-center gap-6">


<div className="text-right">


<p className="font-semibold">

{localStorage.getItem("name") || "Admin"}

</p>


<p className="text-sm text-slate-500">

HR Manager

</p>


</div>



<button

onClick={logout}

className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-xl"

>

Logout

</button>



</div>



</div>


)


}