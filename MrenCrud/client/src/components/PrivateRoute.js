import { Navigate } from "react-router-dom"

const PrivateRoute = ({children}) => {
    const infosfind = JSON.parse(localStorage.getItem("userInfos"))
    
  return infosfind ? children : <Navigate to="/login" />
}

export default PrivateRoute
