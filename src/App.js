import { createContext, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Routing from "./router/Routing";

export const UserContext = createContext();

function App() {
  const [userData , setUserData] = useState({ loggedIn: false })
  return (
    <UserContext.Provider value={{ userData, setUserData }}>
      <BrowserRouter>
        <Routing />
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
