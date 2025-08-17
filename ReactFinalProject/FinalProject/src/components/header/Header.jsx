import { useMemo } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import Container from "../container/Container";
import LogoutBtn from "./LogoutBtn";

export default function Header() {
    const isLoggedIn = useSelector(state => state.auth.status);

    const navItems = useMemo(() => {
        [
            {
                title: "Home",
                path: "/",
                isVisible: true
            },
            {
                title: "All Posts",
                path: "/all-posts",
                isVisible: isLoggedIn
            },
            {
                title: "Add Posts",
                path: "/add-posts",
                isVisible: isLoggedIn
            },
            {
                title: "LogIn",
                path: "/login",
                isVisible: !isLoggedIn
            },
            {
                title: "SignUp",
                path: "/signup",
                isVisible: !isLoggedIn
            }
        ]
    }, [isLoggedIn])

    return (
        <Container
        className="flex flex-row justify-between h-{10vh}">
            <div>
                <h1>Logo</h1>
            </div>
            <div>
                <ul>
                    {navItems.map((item) => {
                        return (
                            item.isVisible && (<li key={item.title}>
                                <NavLink to={item.path}>{item.title}</NavLink>
                            </li>)
                        )
                    })}
                </ul>
            </div>
            <div>
                {isLoggedIn && (
                    <LogoutBtn
                    className="p-3"
                    />
                )}
            </div>
        </Container>
    )
}