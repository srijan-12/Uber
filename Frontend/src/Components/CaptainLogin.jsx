import { useState } from "react"
import { Link } from "react-router-dom"

export const CaptainLogin = () =>{
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
                        <h3 className="font-semibold mb-2">What's your email</h3>
                        <input type="email" required placeholder="email@gmail.com" className="bg-[#eeeeee] w-full p-3 rounded placeholder:text-sm" value={email} onChange={(e)=>setEmail(e.target.value)}/>

                        <h3 className="font-semibold mt-6 mb-2">Enter Password</h3>
                        <input type="password" required placeholder="password" className="bg-[#eeeeee] w-full p-3 rounded placeholder:text-sm" value={password} onChange={(e)=>setPassword(e.target.value)}/>

                        <button className="w-full bg-black text-white p-2 m-auto mt-6 rounded" onClick={loginHandler}>Login</button>

                        <p className="text-center text-sm m-4">New here? <Link to="/captain-signup" className="text-sm text-blue-600">Register as a captain</Link></p>
                   </div>
                </div>
                <div className="p-4">
                    <Link to='/user-login' className="inline-block text-center w-full bg-[#56C97D] text-white p-3 m-auto mt-4 mb-6 rounded">Log in as User</Link>
                </div>
            </div>
        </>
    )
}