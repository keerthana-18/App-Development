import axios from "axios";
import { useEffect } from "react";


// useEffect (()=>{
// },[])
let jwtToken = localStorage.getItem('Token')

console.log(jwtToken)
// conso
const authheader = `Bearer ${jwtToken}`;
const headers = {
  'Authorization': authheader,
  'Content-Type': 'application/json',
};

//appserver endpoint
// const URI = 'http://15.207.14.101:8080'
const URI = 'http://localhost:8181'



const getUser = () => axios.get(`${URI}/user/get`, { headers })
const getUserbyId = (id) => axios.get(`${URI}/user/find/${id}`, { headers })
const editUser = (id, product) => axios.put(`${URI}/user/edit/${id}`, product, { headers })
const deleteUser = (id) => axios.delete(`${URI}/user/delete/${id}`, { headers })

const userLogin = (signin) => axios.post(`${URI}/auth/login`, signin)
const userRegister = (register) => axios.post(`${URI}/auth/register`, register)
// const adminLogin = (signin) => axios.post(`${URI}/auth/login`, signin)

//dashboard
const getUserCount = () => axios.get(`${URI}/user/getCount`, { headers })

const getProduct = () => axios.get(`${URI}/product/get`)
const getProductbyId = (id) => axios.get(`${URI}/product/find/${id}`, { headers })


export {getProduct, getProductbyId,getUser, getUserbyId, editUser, deleteUser, getUserCount, userLogin,userRegister }