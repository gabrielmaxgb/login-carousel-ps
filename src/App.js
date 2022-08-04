import { createContext, useState } from "react";
import Routing from "./router/Routing";

export const UserContext = createContext();

function App() {
  const [userData , setUserData] = useState({ loggedIn: false })
  return (
    <UserContext.Provider value={{ userData, setUserData }}>
      <Routing />
    </UserContext.Provider>
  );
}

export default App;
