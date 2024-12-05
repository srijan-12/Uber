export const CaptainDetails = () =>{
    return (
        <>
            <div className="h-[40%] bg-white absolute w-full top-[58%] me-4 p-4 flex flex-col justify-around">
                    <div className="flex flex-row justify-between">
                        <div className=" flex items-center gap-3 p-0">
                            <div className="image h-16 w-16 rounded-full bg-cover bg-center"><img src="https://media.gq.com/photos/56a15e4ed312acff191b8bf2/16:9/w_2560%2Cc_limit/chris-evans-captain-america.jpg" alt="" className="rounded-full h-full w-full" /></div>
                            <p className="font-semibold text-lg">Captain America</p>
                        </div>
                    
                    <div className="">
                        <p className="text-xl font-semibold">₹295.20</p>
                        <p className="text-gray-500">earned</p>
                    </div>
                    </div>

                    <div className="bg-gray-100 w-full mx-auto p-2 py-6 gap-4 rounded-lg flex flex-row justify-around">
                        <div className=" w-1/3 flex flex-col gap-2">
                            <i className="fa-solid fa-hourglass text-center text-lg"></i>
                            <p className="text-center font-semibold text-lg">10.2</p>
                            <p className="text-center">Hours Online</p>
                        </div>

                        <div className=" w-1/3 flex flex-col gap-2">
                            <i className="fa-regular fa-clock text-center text-xl"></i>
                            <p className="text-center font-semibold text-lg">10.2</p>
                            <p className="text-center">Hours Online</p>
                        </div>

                        <div className=" w-1/3 flex flex-col gap-2">
                            <i className="fa-solid fa-hourglass text-center text-lg"></i>
                            <p className="text-center font-semibold text-lg">10.2</p>
                            <p className="text-center">Hours Online</p>
                        </div>
                    </div>
                </div>
        </>
    )
}