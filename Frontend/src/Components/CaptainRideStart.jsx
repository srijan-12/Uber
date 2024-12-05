import { Link } from "react-router-dom"
export const CaptainRideStart = ({setRideStart, setrandom}) =>{
    
    return(
        <>
            {<div className="h-screen relative overflow-y-hidden">
                <div className="absolute w-screen flex flex-row items-end justify-between">
                        <Link to= "/">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/1600px-Uber_logo_2018.svg.png" alt="logo" className="w-16 pt-8 ms-6"/>
                        </Link>

                        <div className="bg-[#fff] rounded-full h-12 w-12 flex items-center"><i className="fa-solid fa-right-from-bracket text-xl px-4"></i></div>
                </div>

                <div className=" h-[82%] w-full">
                    <img src="https://i.redd.it/g2r5ewz4tqk11.jpg" alt="map" className="mb-10 h-full w-full"/>
                </div>

                <div className="bg-yellow-400 h-[18%]">
                <div className="w-full text-center"><i class="fa-solid fa-angle-up text-2xl text-black"></i></div>
                    <div className="flex flex-row w-full justify-around items-center">
                        <div className="text-2xl font-semibold"><p>2 KM away</p></div>
                        <Link to="/captain-finish-ride" className="bg-[#397A3F] p-4 px-6 rounded-lg text-white font-semibold text-lg my-3">Complete Ride</Link>
                    </div>
                </div>
                
            </div>}
        </>
    )
}