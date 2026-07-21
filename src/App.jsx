import { BrowserRouter, Routes, Route } from "react-router-dom";


import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";


import Dashboard from "./pages/Dashboard";
import Employees from "./pages/Employees";
import AddEmployee from "./pages/AddEmployee";
import EmployeeProfile from "./pages/EmployeeProfile";
import EditEmployee from "./pages/EditEmployee";


import ApplyLeave from "./pages/ApplyLeave";
import LeaveHistory from "./pages/LeaveHistory";
import Admin from "./pages/Admin";


import NotFound from "./pages/NotFound";



function App(){


return(

<BrowserRouter>

<Routes>


{/* Authentication */}

<Route
path="/"
element={<Login/>}
/>


<Route
path="/register"
element={<Register/>}
/>


<Route
path="/forgot-password"
element={<ForgotPassword/>}
/>


<Route
path="/reset-password"
element={<ResetPassword/>}
/>



{/* Main Pages */}

<Route
path="/dashboard"
element={<Dashboard/>}
/>


<Route
path="/employees"
element={<Employees/>}
/>


<Route
path="/add-employee"
element={<AddEmployee/>}
/>


<Route
path="/employee-profile/:id"
element={<EmployeeProfile/>}
/>


<Route
path="/edit-employee/:id"
element={<EditEmployee/>}
/>



{/* Leave */}

<Route
path="/apply-leave"
element={<ApplyLeave/>}
/>


<Route
path="/leave-history"
element={<LeaveHistory/>}
/>


<Route
path="/admin"
element={<Admin/>}
/>



{/* Error */}

<Route
path="*"
element={<NotFound/>}
/>


</Routes>


</BrowserRouter>

)

}


export default App;