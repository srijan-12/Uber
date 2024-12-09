import { Link } from "react-router-dom"
import { useSelector } from "react-redux"
export const RideStartPage = ({pickup,dropoff,saveRideLogo,captainName,vehicleNumber,vehicleModel,saveRideFare}) =>{
    return (
        <>
            <div className="h-screen relative overflow-y-hidden">
                <div className="absolute">
                        <Link to= "/">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/1600px-Uber_logo_2018.svg.png" alt="logo" className="w-16 pt-8 ms-6"/>
                        </Link>
                </div>

                <div className=" h-[70%] w-full">
                    <img src="https://i.redd.it/g2r5ewz4tqk11.jpg" alt="map" className="mb-10 h-full w-full"/>
                </div>

                {<div className="h-[80%] bg-white absolute w-full top-[58%] me-4 p-4">

                    <div className="w-full flex justify-between p-2 mb-2 items-center">
                        <div className="logo w-1/4 ">
                            <img src={saveRideLogo} alt=""/>
                        </div>
                        <div className="vehicleInfo flex flex-col text-right">
                            <p className="text-xl font-bold p-2">{captainName}</p>
                            <p className="text-2xl font-bold">{vehicleNumber}</p>
                            <p>{vehicleModel}</p>
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center border-b-2"><i className="fa-solid fa-location-dot p-6 text-xl"></i><div><p className="text-xl font-semibold">{pickup.length > 30 ? pickup.slice(0, 30) + "..." : pickup}</p> <p className="text-sm text-gray-500">{dropoff.length > 24 ? dropoff.slice(0, 24) + "..." : dropoff}</p></div></div>
                        <div className="flex items-center"><i class="fa-solid fa-indian-rupee-sign  p-6 text-xl"></i><div><p className="text-xl font-semibold">{saveRideFare}</p><p className="text-sm text-gray-500">Cash</p></div></div>
                    </div>


                    <div>
                        <button className="text-center w-full bg-[#56C97D] text-white p-3 m-auto mt-4 mb-6 rounded text-lg font-semibold">Make payment</button>
                    </div>

                    </div>}
                </div>
        </>
    )
}