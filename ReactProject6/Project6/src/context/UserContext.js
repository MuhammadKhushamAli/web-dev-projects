import { useContext } from "react";

export const UserContext = React.createContext();

export const UserContextProvider = UserContext.Provider;

export function useData()
{
    return useContext(UserContext);
}