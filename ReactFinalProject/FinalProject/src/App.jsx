import { useEffect, useState } from "react";
import { useDispatch } from 'react-redux';
import { login, logout } from "./features/authentication/authSlice";
import authService from "./appWrite/authentication";

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService.getCurrentSession()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }));
        }
        else {
          dispatch(logout());
        }
      })
      .finally(() => setLoading(false));

  }, []);
  return (
    <div>
      {loading ? <h1>Loading</h1> : <h1>Running</h1>}
    </div>
  )
}

export default App
