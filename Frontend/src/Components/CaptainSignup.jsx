import { useState } from "react"
import { Link } from "react-router-dom"

export const CaptainSignup = () =>{
    const[firstName,setFirstName] = useState('');
    const[lastName, setLastName] = useState('');
    const[email,setEmail] = useState('');
    const[password, setPassword] = useState('');
    const loginHandler = () =>{
        console.log('fetch api')
    }
    return(
        <>
            <div className="h-screen w-full flex flex-col justify-between">
                <div>
                    <div>
                    <Link to= "/">
                        <img src="https://pngimg.com/d/uber_PNG24.png" alt="logo" className="w-16 pt-8 ms-6"/>
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