import { useContext } from "react"
import UserContext from "../context/UserContext"

export default function Profile()
{
    const {user} = useContext(UserContext);

    if (!user) return <p>Please Login</p>
    return <p>{user.userName}
    {user.userPassword}</p>
}