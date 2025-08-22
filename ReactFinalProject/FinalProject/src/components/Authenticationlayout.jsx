import { useState, useEffect } from "react";
import { set } from "react-hook-form";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function AuthenticationLayout({ children, isAuthenticated = true }) {
    const navigate = useNavigate();
    const authStatus = useSelector(state => state.auth.status);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        if (isAuthenticated && authStatus !== isAuthenticated) {
            navigate('/login');
        }
        else if (!isAuthenticated && authStatus !== isAuthenticated) {
            navigate('/');
        }
        setLoading(false);

    }, [authStatus, navigate, isAuthenticated]);

    return loading ? <h1>Loading...</h1> : <div>{children}</div>;
}