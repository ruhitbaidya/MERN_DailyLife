
import { Navigate } from "react-router-dom"

const WellProtectpage = ({children}) => {
    const token = localStorage.getItem("token")
    console.log(token)
  return token ? children : <Navigate to="/login" />
}

export default WellProtectpage
