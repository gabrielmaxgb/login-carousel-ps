import { Button, Grid } from "@mui/material";
import { useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { UserContext } from "../../../App";
import { HcData } from "../../HcData";
import { FullHeightGrid, StyledTextField } from "./LoginStyles";

function Login() {
  // const [userData, setUserData] = useContext(UserContext);
  const { userData, setUserData } = useContext(UserContext);
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState(false)
  const navigate = useNavigate();
  const location = useLocation();

  const login = () => {
    console.log("login");
    setLoginError(false);
    // localStorage.setItem("token", HcData.token);
    if (user.loggedIn) return;
    setUserData({ loggedIn: true });
    navigate("/home");
  }

  const handleClick = () => {
    user === HcData.user && password === HcData.password ? login() : (
      setLoginError(true)
    );
  };

  return (
    <FullHeightGrid
      container 
      spacing={2} 
      alignItems="center" 
      justifyContent="center"
    >
      <Grid 
        container 
        item 
        xs={12} 
        sm={12} 
        direction="column" 
        alignItems="center" 
        justifyContent="center"
      >
        <StyledTextField
          label="User"
          error={loginError}
          value={user}
          onChange={(e) => setUser(e.target.value)}
        />
        <StyledTextField
          label="Password"
          error={loginError}
          helperText={loginError && "Incorrect entry"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button 
          onClick={() => handleClick()}
        >
          Login
        </Button>
      </Grid>
    </FullHeightGrid>
  );
};

export default Login;