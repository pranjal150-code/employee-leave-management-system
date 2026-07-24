import axios from "axios";

const API = axios.create({
    baseURL: "https://employee-leave-management-system-chdl.onrender.com/api"
});

export default API;