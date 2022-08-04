import { useContext } from "react";
import { useLocation } from "react-router";
import { Navigate, Outlet } from "react-router-dom";
import { UserContext } from "../App";

const useAuth = () => {
  const { userData } = useContext(UserContext);
  return userData && userData.loggedIn;
};

function ProtectedRoutes() {
  const location = useLocation();
  console.log(location);
  const isAuth = useAuth();
  
  return isAuth ? <Outlet /> : <Navigate to="/" replace state={{ from: location }} />;
};

export default ProtectedRoutes;