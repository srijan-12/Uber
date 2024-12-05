import { useRef, useState } from "react";
import { gsap } from "gsap/gsap-core";
import { CaptainRideDetails } from "./CaptainRideDetails";
export const RidePopUp = ({setCaptainDetails,setRideRequestPopup,rideRequestPopup,setrandom,setRideStart}) =>{
    const rideRequestPopupAnimation = useRef(null);
    const [confirmridedetails, setConfirmidedetails] = useState(false);

    const hidePopup = () => {
        gsap.to(rideRequestPopupAnimation.current, {
            y: "100%",
            duration: 0.4,
            onComplete: () => {
                setRideRequestPopup(false);
                setCaptainDetails(true);
            },
        });
    };

    const confirmRideDetails = () => {
        gsap.to(rideRequestPopupAnimation.current, {
            y: "100%",
            duration: 0.4,
            onComplete: () => {
                setConfirmidedetails(true);
            },
        });
    };
    
    return(
        <>
            <div className="parent">

             {rideRequestPopup && <div className="h-[40%] bg-white absolute w-full top-[28%] me-4 p-4 flex flex-col justify-around" ref={rideRequestPopupAnimation}>

                <div className="w-full text-right" onClick={hidePopup}><i class="fa-solid fa-angle-down text-2xl text-gray-400"></i></div>

                <h1 className="text-2xl font-medium font-bold p-2 mb-3">New Ride Available</h1>


                <div className="flex flex-row justify-between items-center bg-yellow-200 rounded-lg p-3">
                        <div className=" flex items-center gap-3 p-0">
                            <div className="image h-16 w-16 rounded-full bg-cover bg-center"><img src="https://media.gq.com/photos/56a15e4ed312acff191b8bf2/16:9/w_2560%2Cc_limit/chris-evans-captain-america.jpg" alt="" className="rounded-full h-full w-full" /></div>
                            <p className="font-semibold text-lg">Captain America</p>
                        </div>
    
                    <div className="">
                        <p className="text-xl font-semibold">2.2 km</p>
                    </div>
                </div>

                <div className="w-full bg-white">
                    <div className="flex items-center border-b-2"><i className="fa-solid fa-map-pin p-6 text-xl"></i><div><p className="text-xl font-semibold">Pickup location</p> <p className="text-sm text-gray-500">Pickup location-1</p></div></div>
                    <div className="flex items-center border-b-2"><i className="fa-solid fa-location-dot p-6 text-xl"></i><div><p className="text-xl font-semibold">Drop-Location </p><p className="text-sm text-gray-500">Drop-Location-1</p></div></div>
                    <div className="flex items-center"><i class="fa-solid fa-indian-rupee-sign  p-6 text-xl"></i><div><p className="text-xl font-semibold">Payment details</p><p className="text-sm text-gray-500">Payment mode</p></div></div>
                </div>

                <button onClick={confirmRideDetails} className="w-full bg-[#56C97D] p-4 rounded-lg text-white font-semibold text-lg my-3" >Accept</button>
                <button onClick={hidePopup} className="w-full bg-[#ff0000] p-4 rounded-lg text-white font-semibold text-lg my-3" >Ignore</button>
                </div>}

                {confirmridedetails && <CaptainRideDetails setRideRequestPopup={setRideRequestPopup} setCaptainDetails={setCaptainDetails} setrandom={setrandom} setRideStart={setRideStart}/>}
            </div>
        </>
    )
}