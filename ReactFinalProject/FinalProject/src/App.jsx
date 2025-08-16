import { useEffect } from "react";
import {useDispatch} from 'react-redux';
import { login, logout } from "./features/authentication/authSlice";
import authService from "./appWrite/authentication";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const userData = authService.getCurrentSession();

    if(userData)
    {
      dispatch(login(userData));
    }
    else{
      dispatch(logout());
    }
    
  }, [])
  return (
    <></>
  )
}

export default App
