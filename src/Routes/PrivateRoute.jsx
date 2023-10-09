import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";




const PrivateRoute = ({ children }) => {
    const location = useLocation()
   const {user , loader} = useContext(AuthContext);
   if(loader){
    return <span className="loading flex justify-center items-center h-screen  mx-auto loading-infinity loading-lg"></span>
   }
   if(user){
    return children
   }
    return <Navigate state={location.pathname} to={'/login'}></Navigate>;
};

export default PrivateRoute;