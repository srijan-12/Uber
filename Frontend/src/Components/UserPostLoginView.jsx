import { useRef, useState, useCallback, useEffect } from "react"
import { Link } from "react-router-dom"
import {gsap} from "gsap"
import { LocationHistory } from "./LocationHistory";
import { ChooseRidePannel } from "./ChooseRidePannel";
import { ConfirmRidePannel } from "./ConfirmRidePannel";
import { RideStartPage } from "./RideStartPage";
import debounce from "lodash.debounce";
import axios from "axios"


export const UserPostLoginView = () =>{
    const [showpannel , setShowPannel] = useState(false);
    const[findTripPannel, setFindTripPannel] = useState(true)
    const[chooseRidePannelShow , setChooeseRidePannelShow] = useState(false)
    const[confirmRidePannelShow , setConfirmRidePannelShow] = useState(false);
    const[saveAddress, setSaveAddress] = useState('');
    const[saveRideLogo, setSaveRideLogo] = useState('');
    const[rideBooked, setRideBooked] = useState(false);
    const[captainName, setCaptainName] = useState('Sarthak');
    const[vehicleNumber,setVehicleNumber] = useState('JH01 AZ 9876');
    const[vehicleModel, setVehicleModel] = useState('Maruti Suzuki Alto');
    const[rideFare, setRideFare] = useState(193.20);
    const[pickup, setPickUp] = useState('');
    const[dropoff, setDropoff] = useState('');
    const pannelRef = useRef();
    const [locations, setLocations] = useState([]);
    const[fillingPickup, setFillingPickup] = useState(true);
    const[fillingDropoff, setFillingDropoff] = useState(false);
    const[fareObj, setFareObj] = useState();
    const [error, setError] = useState(null); 
    const[showToastError, setShowToastError] = useState(false);
    const[saveRideFare,setSaveRideFare] = useState();
    
    const handleShowPannel = () =>{
        setShowPannel(true);
        gsap.to(pannelRef.current, {top:72, height:"110%"});

    }

    const handleHidePannel = () =>{
        gsap.to(pannelRef.current, { top: 627, clearProps: "top" });
        setShowPannel(false);
    }

    const handleMapClick = () =>{
        setChooeseRidePannelShow(false),
        setFindTripPannel(true)
    }
    const fetchSuggestions = async (value) => {
        console.log("API hit for:", value);
        if (value.trim()) {
            try {
                const locationArr = await axios.get(
                    `${import.meta.env.VITE_BASE_URL}/maps/get-suggestions?input=${value}`,
                    { withCredentials: true }
                );
                setLocations(locationArr.data.result);
            } catch (error) {
                console.error("Error fetching location suggestions:", error);
            }
        }
    };

    const debouncedFetchSuggestions = useCallback(
        debounce((value) => fetchSuggestions(value), 500),
        []
    );


    const handleChangePickup = (e) => {
        const value = e.target.value;
        setPickUp(value);
        setFillingPickup(true)
        debouncedFetchSuggestions(value);
    };

    const handleChangeDropoff = (e) =>{
        const value = e.target.value;
        setDropoff(value);
        setFillingDropoff(true);
        debouncedFetchSuggestions(value);
    }

    const getFare = async() =>{
        try{
            const fare = await axios.post(
                `${import.meta.env.VITE_BASE_URL}/maps/get-fare`,{pickup, dropoff},
                { withCredentials: true })
                setFareObj(fare);
        }catch{
            console.error("Error fetching location suggestions:", error);
        }
    }
 

    const handleFindRide = async() =>{
        if(pickup.length >= 3 && dropoff.length >= 3){
            getFare();
            setShowPannel(false)
            setFindTripPannel(false);
            setChooeseRidePannelShow(true);
            setSaveAddress(location)
        }else{
            setError("Enter valid addresses")
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
        </div>}
            {!rideBooked && <div className="h-screen relative overflow-y-hidden">
                <div className="absolute">
                        <Link to= "/">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/1600px-Uber_logo_2018.svg.png" alt="logo" className="w-16 pt-8 ms-6"/>
                        </Link>
                </div>

                <div className=" h-[65%] w-full" onClick={handleMapClick}>
                    <img src="https://i.redd.it/g2r5ewz4tqk11.jpg" alt="map" className="mb-10 h-full w-full"/>
                </div>

                {findTripPannel && <div className="absolute w-full  h-[35%] mb-10 bg-white" ref={pannelRef}>
                    <div className=" p-4 absolute w-full">
                        <div>
                        <div className="flex justify-between">
                                <h1 className="text-3xl font-bold">Find a trip</h1>
                                {showpannel ? <i class="fa-solid fa-angle-down" onClick={handleHidePannel}></i>:<i class="fa-solid fa-angle-up" onClick={handleShowPannel}></i>}
                        </div>

                        <div className="flex flex-col h-full">
                                <input type="text" className="w-full rounded-lg p-5 mt-3 mb-4 bg-[#eee]" placeholder="Add pickup location"  onClick={handleShowPannel} value={pickup} onChange={(e)=>handleChangePickup(e)}/>
                                <input type="text" className="w-full rounded-lg p-5 mt-3 mb-4 bg-[#eee]" placeholder="Add your destination" onClick={handleShowPannel} value={dropoff} onChange={(e)=>handleChangeDropoff(e)}/>
                        </div>

                        </div>
                    </div>

                    {showpannel && <div className="h-[80%] bg-white absolute w-full top-[23%] me-4 px-4">

                        <button className="bg-black text-white w-full py-4 rounded-lg mt-5 text-lg" onClick={handleFindRide}>Find your ride</button>

                        <LocationHistory setChooeseRidePannelShow= {setChooeseRidePannelShow} setFindTripPannel={setFindTripPannel} setShowPannel={setShowPannel} setSaveAddress={setSaveAddress} pannelRef={pannelRef} locations={locations} setPickUp={setPickUp} setDropoff={setDropoff} fillingPickup={fillingPickup} fillingDropoff={fillingDropoff} setFillingPickup={setFillingPickup} setFillingDropoff = {setFillingDropoff} pickup={pickup} dropoff={dropoff}/>
                    </div>}
                    </div>}
                    {chooseRidePannelShow && <div className="absolute bg-white w-full top-[45%] h-screen p-2">
                        <h1 className="text-3xl font-bold p-4">Choose your ride</h1>
                        <ChooseRidePannel logo="https://i.pinimg.com/474x/8d/21/7b/8d217b1000b642005fea7b6fd6c3d967.jpg" type="UberGo" capacity="4" time="2" para="Affordable, compact rides" fair= {fareObj?.data?.result?.car} setChooeseRidePannelShow ={setChooeseRidePannelShow} setConfirmRidePannelShow={setConfirmRidePannelShow} setSaveRideLogo={setSaveRideLogo}  setSaveRideFare={setSaveRideFare}/>


                        <ChooseRidePannel logo="https://static.toiimg.com/thumb/msid-98228989,imgsize-496903,width-400,resizemode-4/98228989.jpg" type="Moto" capacity="1" time="3" para="Affordable motercycle ride" fair= {fareObj?.data?.result?.bike} setChooeseRidePannelShow ={setChooeseRidePannelShow} setConfirmRidePannelShow={setConfirmRidePannelShow} setSaveRideLogo={setSaveRideLogo}  setSaveRideFare={setSaveRideFare}/>


                        <ChooseRidePannel logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiYZNGPspo5yDiYR9DP05wsjLh1skE79Jfng&s" type="UberAuto" capacity="3" time="5" para="Affordable auto ride" fair= {fareObj?.data?.result?.auto} setChooeseRidePannelShow ={setChooeseRidePannelShow} setConfirmRidePannelShow={setConfirmRidePannelShow} setSaveRideLogo={setSaveRideLogo} setSaveRideFare={setSaveRideFare}/>

                    </div>
                    }
                
                    {confirmRidePannelShow && <div className="bg-white absolute w-full top-[28%] me-4"><ConfirmRidePannel setConfirmRidePannelShow={setConfirmRidePannelShow} saveAddress={saveAddress} saveRideLogo={saveRideLogo} setFindTripPannel={setFindTripPannel}  setRideBooked={setRideBooked} saveRideFare={saveRideFare} pickup={pickup} dropoff={dropoff}/></div>}
            </div>}


            {rideBooked && <RideStartPage pickup={pickup} dropoff={dropoff} saveRideLogo={saveRideLogo} captainName={captainName} vehicleNumber = {vehicleNumber} vehicleModel = {vehicleModel} saveRideFare = {saveRideFare} />}
        </>
    )
}