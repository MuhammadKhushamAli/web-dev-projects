import UserContextProvider from "./context/UserContextProvider"
import Input from "./component/Input"
import Profile from "./component/Profile"

function App() {

  return (
    <UserContextProvider>
      <Input/>
      <Profile/>
    </UserContextProvider>
  )
}

export default App
