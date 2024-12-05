import { Link } from "react-router-dom"
import { CaptainDetails } from "./CaptainDetails"
import { useState } from "react"
import { RidePopUp } from "./RidePopUp";
import { CaptainRideStart } from "./CaptainRideStart";

export const CaptainPostLoginView = () =>{
    const [captainDetails, setCaptainDetails] = useState(false);
    const [rideRequestPopup, setRideRequestPopup] = useState(true);
    const [ridestart,setRideStart] = useState(false);
    const[random, setrandom] = useState(true);
    return(
        <>
            {random && <div className="h-screen relative overflow-y-hidden">
                <div className="absolute w-screen flex flex-row items-end justify-between">
                        <Link to= "/">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/1600px-Uber_logo_2018.svg.png" alt="logo" className="w-16 pt-8 ms-6"/>
                        </Link>

                        <div className="bg-[#fff] rounded-full h-12 w-12 flex items-center"><i className="fa-solid fa-right-from-bracket text-xl px-4"></i></div>
                </div>

                <div className=" h-[70%] w-full">
                    <img src="https://i.redd.it/g2r5ewz4tqk11.jpg" alt="map" className="mb-10 h-full w-full"/>
                </div>

                {captainDetails && <CaptainDetails/>}
                {rideRequestPopup && <RidePopUp setCaptainDetails={setCaptainDetails} setRideRequestPopup={setRideRequestPopup} rideRequestPopup={rideRequestPopup} setRideStart = {setRideStart} setrandom={setrandom}/>}
            </div>}

                {ridestart && <CaptainRideStart/>}
            

        </>
    )
}