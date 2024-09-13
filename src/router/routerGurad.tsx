import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const PrivateRoute = ({ Element }: { Element: JSX.Element }): JSX.Element => {
  const navigate = useNavigate();
  const location = useLocation();
  const token = localStorage.getItem("token");
  useEffect(() => {
    return (): void => {
      // if (!token && location.pathname !== "/login") {
      //   navigate("/login");
      // }
    };
  }, [navigate, location.pathname]);
  return <>{Element}</>;
};
export default PrivateRoute;
