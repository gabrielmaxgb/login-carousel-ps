import { Route, Routes } from "react-router-dom";
import Home from "../app/pages/home/Home";
import Login from "../app/pages/login/Login";
import NotFound from "../app/pages/notFound/NotFound";
import ProtectedRoutes from "./ProtectedRoutes";

function Routing() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route element={<ProtectedRoutes />}>
        <Route path="/home" element={<Home />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Routing;