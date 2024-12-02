import {useDispatch, useSelector} from "react-redux"
import {appStore} from "../utitities/store"
import axios from "axios"
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { addUser, removeUser } from "../utitities/userSlice";
import { UserPostLoginView } from "./UserPostLoginView.jsx";
export const PostLogin = () =>{
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [user,setUser] = useState();
    const [redirecting, setRedirecting] = useState(false);
    const fetchProfile = async()=>{
        try{
            const result = await axios.get(`${import.meta.env.VITE_BASE_URL}/user/profile`, {withCredentials:true})
            setUser(result?.data?.user?.email);
            dispatch(addUser(result?.data?.user));
        }catch(err){
            dispatch(removeUser())
            setRedirecting(true);
            setTimeout(() => {
                console.log("check")
                setRedirecting(false);
                navigate("/user-login")
            }, 1500);
            
        }
    }
    useEffect(()=>{
        fetchProfile();
    },[])
    return(
        <>
            {redirecting && <div className="toast toast-top toast-center">
                <div className="alert alert-info">
                    <span>Session expired login again</span>
                </div>
        </div>}
        <UserPostLoginView/>
        </>
    )
}