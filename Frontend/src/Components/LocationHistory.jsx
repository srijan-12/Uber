import {gsap} from "gsap"
export const LocationHistory = ({setChooeseRidePannelShow, setFindTripPannel, setShowPannel, pannelRef,setSaveAddress}) =>{
    const handleClick = (location) =>{
        setShowPannel(false)
        setFindTripPannel(false);
        setChooeseRidePannelShow(true);
        setSaveAddress(location);
    }
    const locations = [
        {
            firstAddress: "AB-372 4th floor Devi Gauri Appartment",
            secondAddress: "near 206 foot-bridge Samarpally Keshtopur, Kolkata"
        },
        {
            firstAddress: "DL-45 2nd floor Bright Star Apartments",
            secondAddress: "opposite Green Valley Park, Lake View Road, New Delhi"
        },
        {
            firstAddress: "TN-87 Block C Rosewood Towers",
            secondAddress: "near Marina Beach, Mylapore, Chennai"
        },
        {
            firstAddress: "MH-302 3rd floor Sunshine Residency",
            secondAddress: "beside Phoenix Mall, Viman Nagar, Pune"
        },
        {
            firstAddress: "RJ-112 Flat 5B Desert Oasis Complex",
            secondAddress: "near Hawa Mahal, Johari Bazaar, Jaipur"
        },
        {
            firstAddress: "KA-56 6th floor Elite Heights",
            secondAddress: "opposite Infosys Campus, Electronic City, Bengaluru"
        }
    ];
    return(
        <>
            {locations.map((location,index)=>{
                return(
                <div className="w-full flex px-4 py-2 items-center gap-4 my-2 border-2 border-grey-100 active:border-2 active:border-black rounded-lg" key={index} onClick={()=>handleClick(location)}> 
                <div className="bg-[#eee] p-3 w-[48px] h-[48px] rounded-full flex justify-center"><i className="fa-solid fa-location-dot text-xl"></i></div>
                <div className="">
                    <p className="text-sm">{location.firstAddress}</p>
                    <p className="text-sm">{location.secondAddress}</p>
                </div>
            </div>)
            })}
        </>
    )
}