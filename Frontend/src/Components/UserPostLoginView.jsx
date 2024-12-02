import { useRef, useState } from "react"
import { Link } from "react-router-dom"
import {gsap} from "gsap"
import { LocationHistory } from "./LocationHistory";
import { ChooseRidePannel } from "./ChooseRidePannel";
export const UserPostLoginView = () =>{
    const [showpannel , setShowPannel] = useState(false);
    const[findTripPannel, setFindTripPannel] = useState(true)
    const[confirmRidePannelShow , setConfirmRidePannelShow] = useState(false)
    const pannelRef = useRef()

    const handleShowPannel = () =>{
        setShowPannel(true);
        gsap.to(pannelRef.current, {top:72, height:"110%"});
    }

    const handleHidePannel = () =>{
        gsap.to(pannelRef.current, { top: 627, clearProps: "top" });
        setShowPannel(false);
    }

    const handleMapClick = () =>{
        setConfirmRidePannelShow(false),
        setFindTripPannel(true)
    }

    return(
        <>
            <div className="h-screen relative overflow-y-hidden">
                <div className="absolute">
                        <Link to= "/">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/1600px-Uber_logo_2018.svg.png" alt="logo" className="w-16 pt-8 ms-6"/>
                        </Link>
                </div>

                <div className=" h-[70%] w-full" onClick={handleMapClick}>
                    <img src="https://i.redd.it/g2r5ewz4tqk11.jpg" alt="map" className="mb-10 h-full w-full"/>
                </div>

                {findTripPannel && <div className="absolute w-full  h-[30%] mb-10 bg-white" ref={pannelRef}>
                    <div className=" p-4 absolute w-full">
                        <div>
                        <div className="flex justify-between">
                                <h1 className="text-3xl font-bold">Find a trip</h1>
                                {showpannel ? <i class="fa-solid fa-angle-down" onClick={handleHidePannel}></i>:<i class="fa-solid fa-angle-up" onClick={handleShowPannel}></i>}
                        </div>

                        <div className="flex flex-col h-full">
                                <input type="text" className="w-full rounded-lg p-5 mt-3 mb-4 bg-[#eee]" placeholder="Add pickup location"  onClick={handleShowPannel}/>
                                <input type="text" className="w-full rounded-lg p-5 mt-3 mb-4 bg-[#eee]" placeholder="Add your destination" onClick={handleShowPannel}/>
                        </div>

                        </div>
                    </div>

                    {showpannel && <div className="h-[80%] bg-white absolute w-full top-[23%] me-4">
                        <LocationHistory setConfirmRidePannelShow= {setConfirmRidePannelShow} setFindTripPannel={setFindTripPannel} setShowPannel={setShowPannel} pannelRef={pannelRef}/>
                    </div>}
                    </div>}
                    {confirmRidePannelShow && <div className="absolute bg-white w-full top-[45%] h-screen p-2">
                        <h1 className="text-3xl font-bold p-4">Choose your ride</h1>
                        <ChooseRidePannel logo="https://i.pinimg.com/474x/8d/21/7b/8d217b1000b642005fea7b6fd6c3d967.jpg" type="UberGo" capacity="4" time="2" para="Affordable, compact rides" fair="193.20"/>


                        <ChooseRidePannel logo="https://static.toiimg.com/thumb/msid-98228989,imgsize-496903,width-400,resizemode-4/98228989.jpg" type="Moto" capacity="1" time="3" para="Affordable motercycle ride" fair="65.17"/>


                        <ChooseRidePannel logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiYZNGPspo5yDiYR9DP05wsjLh1skE79Jfng&s" type="UberAuto" capacity="3" time="5" para="Affordable auto ride" fair="118.21"/>

                    </div>
                    }
                

            </div>
        </>
    )
}