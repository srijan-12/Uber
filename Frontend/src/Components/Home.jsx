import { Link } from "react-router-dom"

export const Home = () =>{
    return(
        <>
           <div className="flex flex-col justify-between h-screen">
                <div className="bg-[url(https://img.freepik.com/premium-vector/drawing-tricycle-stree-traffic-jam-india_252525-660.jpg?w=1380)] bg-center bg-cover h-full">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/1600px-Uber_logo_2018.svg.png" alt="logo" className="w-24 pt-8 ms-6"/>
                </div>
                <div className="p-6">
                    <h1 className="text-3xl font-bold">Get Started With Uber</h1>
                    <Link to= "/user-login" className="inline-block text-center w-full bg-black text-white p-2 m-auto mt-4 rounded">Continue</Link>
                </div>
           </div>
        </>
    )
}

// https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png