import { useEffect } from "react";
import authService from "../appWrite/authentication";
import AllPosts from "./AllPosts";
import { Container } from "../components";

export default function Home() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const userData = authService.getCurrentSession();

        if(userData)
        {
            setIsLoggedIn(true);
        }

    }, []);

    if(isLoggedIn){
        <AllPosts />
    }
    else
    {
        <Container>
            <h1>Please Log In First</h1>
        </Container>
    }

}