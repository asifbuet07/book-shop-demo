import { useContext } from "react";
import { AuthContext } from "../utils/AuthProvider";
import { Navigate, useLocation, useNavigate } from "react-router-dom";

const PrivateRoutes = ({ children }) => {
  const location = useLocation();
  const { user } = useContext(AuthContext);

  if (!user)
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;

  return children;
};

export default PrivateRoutes;
