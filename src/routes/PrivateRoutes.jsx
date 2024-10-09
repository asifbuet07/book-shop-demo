import { useContext } from "react"
import { AuthContext } from "../utils/AuthProvider"
import { useNavigate } from "react-router-dom";

function PrivateRoutes() {
    const navigate = useNavigate();
    const {user} = useContext (AuthContext);

    if (user) {
        console.log("User Found!");
        return "ok";
    }
    
  return navigate("/login");
}

export default PrivateRoutes