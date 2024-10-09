import { useContext } from "react";
import { AuthContext } from "../utils/AuthProvider";
import { Navigate, useLocation, useNavigate } from "react-router-dom";

const PrivateRoutes = ({ children }) => {
  const { user } = useContext(AuthContext);
  const location = useLocation();

  if (user) {
    return children;
  }

  return <Navigate state={location.pathname} to="/login" />;
};

export default PrivateRoutes;
