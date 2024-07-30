import { Navigate } from "react-router-dom";
function Logout() {
  localStorage.removeItem("isLoggedIn");
  localStorage.removeItem("uuid");
  return <Navigate to="/login" replace />;
}

export default Logout;
