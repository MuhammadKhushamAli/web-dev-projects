import { useEffect, useState } from "react";
import { useDispatch } from 'react-redux';
import { login, logout } from "./features/authentication/authSlice";
import authService from "./appWrite/authentication";
import { Header, Footer, Container } from './components';
import { Outlet } from "react-router-dom";

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
      {loading ? <h1>Loading</h1> :
        <Container>
          <Header />
          <main>
            <Outlet />
          </main>
          <Footer />
        </Container>
      }
    </div>
  )
}

export default App
