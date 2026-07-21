import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import {useEffect,useState} from "react";
import API from "../API/api";


export default function Dashboard(){


const [data,setData]=useState({

employees:0,
leaves:0,
pending:0

});


useEffect(()=>{

load();

},[]);



const load=async()=>{

try{

const e=await API.get("/employees");
const l=await API.get("/leaves");


setData({

employees:e.data.length,

leaves:l.data.length,

pending:l.data.filter(
x=>x.status==="Pending"
).length

});


}
catch(err){

console.log(err);

}

};



return(

<div className="flex">

<Sidebar/>


<div className="flex-1 bg-gray-100 min-h-screen">

<Navbar/>


<div className="p-10">


<h1 className="text-5xl font-bold mb-10">
HR Dashboard
</h1>



<div className="grid md:grid-cols-3 gap-8">



<div className="bg-white rounded-3xl shadow p-8">

<h2 className="text-gray-500">
Employees
</h2>

<p className="text-5xl font-bold text-indigo-600 mt-3">
{data.employees}
</p>

</div>



<div className="bg-white rounded-3xl shadow p-8">

<h2 className="text-gray-500">
Total Leaves
</h2>

<p className="text-5xl font-bold text-green-600 mt-3">
{data.leaves}
</p>

</div>



<div className="bg-white rounded-3xl shadow p-8">

<h2 className="text-gray-500">
Pending Approval
</h2>

<p className="text-5xl font-bold text-orange-500 mt-3">
{data.pending}
</p>

</div>



</div>


</div>


</div>


</div>

)

}