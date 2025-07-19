import { NavLink } from "react-router";
export default function Header() {
    return (
        <header>
            <nav className="bg-red-400 h-[12vh] w-screen">
                <ul className="w-full h-full flex flex-row justify-evenly content-center flex-wrap">
                    <li><NavLink
                    to="/">Hello</NavLink></li>
                    <li><NavLink
                    to="about">About</NavLink></li>
                    <li><NavLink
                    to="contact-us">Contact Us</NavLink></li>
                    <li><NavLink
                    to="GitHub">GitHub</NavLink></li>
                </ul>
            </nav>
        </header>
    );
}