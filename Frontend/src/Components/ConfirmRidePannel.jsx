export const ConfirmRidePannel = ({setConfirmRidePannelShow, saveAddress, saveRideLogo, setFindTripPannel,setRideBooked}) =>{
    const arrowClickHandler = () =>{
        setConfirmRidePannelShow(false);
        setFindTripPannel(true)
    }
    const clickHandler = () =>{
        setRideBooked(true)
    }
    return(
        <>
            <div className="flex flex-col w-full px-4">

                <div className="w-full text-right" onClick={arrowClickHandler }><i class="fa-solid fa-angle-down text-2xl text-gray-400"></i></div>
                
                <h1 className="text-2xl font-medium font-bold p-2">Confirm your ride</h1>

                <div className="w-1/2 mx-auto p-4 h-[191px]">
                    <img src={saveRideLogo} alt="" className="w-full"/>
                </div>

                <div>
                    <div>
                        <div className="flex items-center border-b-2"><i className="fa-solid fa-map-pin p-6 text-xl"></i><div><p className="text-xl font-semibold">Pickup location</p> <p className="text-sm text-gray-500">Pickup location-1</p></div></div>
                        <div className="flex items-center border-b-2"><i className="fa-solid fa-location-dot p-6 text-xl"></i><div><p className="text-xl font-semibold">{saveAddress.firstAddress}</p> <p className="text-sm text-gray-500">{saveAddress.secondAddress}</p></div></div>
                        <div className="flex items-center"><i class="fa-solid fa-indian-rupee-sign  p-6 text-xl"></i><div><p className="text-xl font-semibold">Payment details</p><p className="text-sm text-gray-500">Payment mode</p></div></div>
                    </div>
                </div>


                <button className="w-full bg-[#56C97D] p-4 rounded-lg text-white font-semibold text-lg my-3" onClick={clickHandler}>Confirm</button>
            </div>
        </>
    )
}