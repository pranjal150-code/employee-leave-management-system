import { NavLink } from "react-router-dom";


export default function Sidebar(){


const menu = [

{
name:"Dashboard",
path:"/dashboard",
icon:"📊"
},

{
name:"Employees",
path:"/employees",
icon:"👥"
},

{
name:"Add Employee",
path:"/add-employee",
icon:"➕"
},

{
name:"Apply Leave",
path:"/apply-leave",
icon:"📝"
},

{
name:"Leave History",
path:"/leave-history",
icon:"📅"
},

{
name:"Admin Panel",
path:"/admin",
icon:"⚙️"
}

];



return(


<div className="w-72 min-h-screen bg-slate-950 text-white p-6">


<div className="mb-10">


<h1 className="text-3xl font-bold">
ELMS
</h1>


<p className="text-slate-400 mt-2">
Employee Management
</p>


</div>



<div className="space-y-3">


{
menu.map((item)=>(


<NavLink

key={item.path}

to={item.path}

className={({isActive})=>

`flex items-center gap-4 p-4 rounded-xl transition

${isActive

? "bg-indigo-600 text-white"

: "text-slate-300 hover:bg-slate-800"

}`

}


>


<span className="text-xl">
{item.icon}
</span>


<span className="font-semibold">
{item.name}
</span>


</NavLink>


))

}


</div>



<div className="absolute bottom-8">


<p className="text-slate-400 text-sm">
© 2026 ELMS
</p>


</div>



</div>


)

}