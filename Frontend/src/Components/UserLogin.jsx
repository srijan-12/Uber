import { useState } from "react"
import { Link } from "react-router-dom"
import axios from "axios";
import {useDispatch} from "react-redux"
import { useNavigate } from "react-router-dom";
import { addUser } from "../utitities/userSlice";
export const UserLogin = () =>{
    const[email,setEmail] = useState('johndoe@gmail.com');
    const[password, setPassword] = useState('k8dfh8c@Pfv0gB2');
    const[showToastError, setShowToastError] = useState(false); 
    const[showToastSuccess, setShowToastSuccess] = useState(false);
    const [error, setError] = useState(null);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const loginHandler = async() =>{
        const credentials = {
            email: email,
            password :password
        }
        try{
            const result = await axios.post(`${import.meta.env.VITE_BASE_URL}/user/login`, credentials , {withCredentials :true})
            if(result?.data?.user){
                dispatch(addUser(result?.data?.user));
                setShowToastSuccess(true);
                setTimeout(()=>{
                    setShowToastSuccess(false),
                    navigate("/home")
                },1500)
            }
        }catch(err){
            setError(err?.response?.data?.error);
            setShowToastError(true);
            setTimeout(()=>{
                setShowToastError(false)
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
                <span>Logging you in</span>
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
                        <h3 className="font-semibold mb-2">What's your email</h3>
                        <input type="email" required placeholder="email@gmail.com" className="bg-[#eeeeee] w-full p-3 rounded placeholder:text-sm" value={email} onChange={(e)=>setEmail(e.target.value)}/>

                        <h3 className="font-semibold mt-6 mb-2">Enter Password</h3>
                        <input type="password" required placeholder="password" className="bg-[#eeeeee] w-full p-3 rounded placeholder:text-sm" value={password} onChange={(e)=>setPassword(e.target.value)}/>

                        <button className="w-full bg-black text-white p-2 m-auto mt-6 rounded" onClick={loginHandler}>Login</button>

                        <p className="text-center text-sm m-4">New here? <Link to="/user-signup" className="text-sm text-blue-600">Create new account</Link></p>
                   </div>
                </div>
                <div className="p-4">
                    <Link to='/captain-login' className="inline-block text-center w-full bg-[#56C97D] text-white p-3 m-auto mt-4 mb-6 rounded">Log in as Captain</Link>
                </div>
            </div>
        </>
    )
}