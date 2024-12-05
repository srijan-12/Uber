import {useDispatch, useSelector} from "react-redux"
import {appStore} from "../utitities/store"
import axios from "axios"
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { addUser, removeUser } from "../utitities/captainSlice.js";
import { CaptainPostLoginView } from "./CaptainPostLoginView.jsx";
export const PostLoginCaptain = () =>{
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [captain,setCaptain] = useState();
    const [redirecting, setRedirecting] = useState(false);

    const fetchProfile = async()=>{
        try{
            const result = await axios.get(`${import.meta.env.VITE_BASE_URL}/captain/profile`, {withCredentials:true})
            setCaptain(result?.data?.user?.email);
            dispatch(addUser(result?.data?.user));
        }catch(err){
            dispatch(removeUser())
            setRedirecting(true);
            setTimeout(() => {
                console.log("check")
                setRedirecting(false);
                navigate("/captain-login")
            }, 1500);
            
        }
    }
    useEffect(()=>{
        fetchProfile()
    },[])
    return(
        <>
            {redirecting && <div className="toast toast-top toast-center">
                <div className="alert alert-info">
                    <span>Session expired login again</span>
                </div>
        </div>}
        <CaptainPostLoginView/>
        </>
    )
}