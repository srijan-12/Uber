import { useState } from "react"
import { Link } from "react-router-dom"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import {useDispatch} from "react-redux"
import { addUser } from "../utitities/userSlice"
export const UserSignup = () =>{
    const[firstName,setFirstName] = useState('John');
    const[lastName, setLastName] = useState('Doe');
    const[email,setEmail] = useState('johndoe@gmail.com');
    const[password, setPassword] = useState('k8dfh8c@Pfv0gB2');
    const[showToastError, setShowToastError] = useState(false); 
    const[showToastSuccess, setShowToastSuccess] = useState(false);
    const [error, setError] = useState(null) 
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const loginHandler = async() =>{
        const newUser = {
            fullname: {
                firstname : firstName,
                lastname  : lastName
            },
            email : email,
            password : password
        }
        try{
            const result = await axios.post(`${import.meta.env.VITE_BASE_URL}/user/register`, newUser, {withCredentials : true})
            console.log(result);
            if(result?.data?.user){
                dispatch(addUser(result?.data?.user))
                setShowToastSuccess(true);
                setTimeout(()=>{
                    setShowToastSuccess(false);
                    navigate("/home");
                },1500)
                
            }
        }catch(err){
            console.log(err?.response?.data?.error);
            setError(err?.response?.data?.error);
            setShowToastError(true);
            setTimeout(()=>{
                setShowToastError(false);
            },1500)
        }
    }
    return(
        <>
        {<div className="toast toast-top toast-center">
            {showToastError && <div className="alert alert-info">
                <span>{error}</span>
            </div>}
            {showToastSuccess && <div className="alert alert-success">
                <span>Registered successfully</span>
            </div>}
        </div>}
            <div className="h-screen w-full flex flex-col justify-between">
                <div>
                    <div>
                    <Link to= "/">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/1600px-Uber_logo_2018.svg.png" alt="logo" className="w-16 pt-8 ms-6"/>
                        </Link>
                    </div>
                   <div className="mt-4 w-full p-6">

                        <h3 className="font-semibold mb-2">What's your name</h3>
                        <div className="flex gap-4">
                            <input type="text" required placeholder="John" className="bg-[#eeeeee] w-1/2 p-3 rounded placeholder:text-sm" value={firstName} onChange={(e)=>setFirstName(e.target.value)}/>

                            <input type="text" required placeholder="Doe" className="bg-[#eeeeee] w-1/2 p-3 rounded placeholder:text-sm" value={lastName} onChange={(e)=>setLastName(e.target.value)}/>
                        </div>

                        <h3 className="font-semibold mb-2">What's your email</h3>
                        <input type="email" required placeholder="email@gmail.com" className="bg-[#eeeeee] w-full p-3 rounded placeholder:text-sm" value={email} onChange={(e)=>setEmail(e.target.value)}/>

                        <h3 className="font-semibold mt-6 mb-2">Enter Password</h3>
                        <input type="password" required placeholder="password" className="bg-[#eeeeee] w-full p-3 rounded placeholder:text-sm" value={password} onChange={(e)=>setPassword(e.target.value)}/>

                        <button className="w-full bg-black text-white p-2 m-auto mt-6 rounded" onClick={loginHandler}>Register</button>

                        <p className="text-center text-sm m-4">Already have a account? <Link to="/user-login" className="text-sm text-blue-600">Login here</Link></p>
                   </div>
                </div>
                <div className="p-4 w-full mx-auto my-4">
                    <p className="text-xs">By proceeding you consent to get calls, WhatsApp, or SMS message, including by automated means, from Uber and its affiliates to the number provided</p>
                </div>
            </div>
        </>
    )
}