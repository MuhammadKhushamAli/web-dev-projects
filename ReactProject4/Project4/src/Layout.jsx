import { Outlet } from "react-router";
import { Footer, Header } from "./components";

export default function Layout() {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    );
}