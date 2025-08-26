import { useCallback } from "react";
import { useDispatch } from "react-redux";
import authService from "../../appWrite/authentication";
import { logout } from "../../features/authentication/authSlice";

export default function Logout({
    className = "",
    bgColor = "bg-red-500",
    textColor = "text-white",
    ...props
}){
    const dispatch = useDispatch();
    
    const clickHandler = useCallback(() => {
        authService.Logout()
        .then(
            () => dispatch(logout())
        )
    }, [])

    return (
        <button
        className={`${bgColor} ${textColor} ${className}`}
        onClick={clickHandler}
        {...props}
        >
            LogOut
        </button>
    )
}