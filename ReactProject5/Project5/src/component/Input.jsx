import { useCallback, useContext } from "react"
import UserContext from "../context/UserContext"
import { useState } from "react";

export default function Input()
{
    const [userName, setUserName] = useState('');
    const [userPassword, setUserPassword] = useState('');

    const {setUser} = useContext(UserContext);

    function Handler() {
        setUser({userName, userPassword});
    };
    return(
        <div>
            <input type="text"
            onChange={(e) => setUserName(e.target.value)}
            value={userName}
            placeholder="User Name"/>

            <input type="text"
            onChange={e => setUserPassword(e.target.value)}
            value={userPassword}
            placeholder="Password"/>

            <input type="submit" value="Submit" 
            onClick={Handler}/>
        </div>
    )
}