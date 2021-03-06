import axios from "axios";

// example api request for protected data (sends error i user isn't logged in)
const getProtectedExample = () => axios.get("/api/protected");

// example api request for public data
const getPublicExample = () => axios.get("/api/unprotected");

const findTasks = () => axios.get("/api/users/tasks");
const createTasks = (tasks) => {
   axios.post("/api/users/tasks", tasks); 
} 


const API = { getProtectedExample, getPublicExample, createTasks, findTasks };

export default API;
