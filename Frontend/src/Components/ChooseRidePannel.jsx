export const ChooseRidePannel = ({logo,type,capacity,time,para,fair,setChooeseRidePannelShow,setConfirmRidePannelShow,setSaveRideLogo}) =>{
    const clickHandler = () =>{
        setChooeseRidePannelShow(false);
        setConfirmRidePannelShow(true)
        setSaveRideLogo(logo)
    }
    return(
        <>
            <div className="rounded-xl flex items-center my-4 border-4 border-gray-200 active:border-4 active:border-black" onClick={clickHandler}>
                <div className="rideLogo w-1/4 p-2">
                    <img src={logo} alt="logo"/>
                </div>
                <div className="rideInfo w-1/2 p-2">
                    <div className="flex gap-2 items-center"><p className="text-2xl font-semibold">{type}</p> <span><i class="fa-solid fa-user"></i></span><span>{capacity}</span></div>
                    <p>{time} mins away</p>
                    <p className="text-gray-600">{para}</p>
                </div>
                <div className="rideFare w-1/4 p-4 text-xl font-semibold">₹{fair}</div>
            </div>
        </>
    )
}