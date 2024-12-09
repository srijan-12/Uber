import {gsap} from "gsap"
export const LocationHistory = ({setChooeseRidePannelShow, setFindTripPannel, setShowPannel, pannelRef,setSaveAddress,locations,setPickUp, setDropoff, fillingPickup, fillingDropoff, setFillingPickup, setFillingDropoff,pickup, dropoff}) =>{
    const handleClick = (location) =>{
        
        if(fillingPickup){
            setPickUp(location);
            setFillingPickup(false)
        }
        if(fillingDropoff){
            setDropoff(location);
            setFillingDropoff(false);
        }

        
        
    }
    return(
        <>
            {locations?.map((location,index)=>{
                return(
                <div className="w-full flex px-4 py-2 items-center gap-4 my-2 border-2 border-grey-100 active:border-2 active:border-black rounded-lg" key={index} onClick={()=>handleClick(location)}> 
                <div className="bg-[#eee] p-3 w-[48px] h-[48px] rounded-full flex justify-center"><i className="fa-solid fa-location-dot text-xl"></i></div>
                <div className="">
                    <p className="text-sm">{location}</p>
                </div>
            </div>)
            })}
        </>
    )
}