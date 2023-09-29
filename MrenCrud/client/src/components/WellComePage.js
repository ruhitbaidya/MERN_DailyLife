import React from 'react'
import axios from "axios"
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const WellComePage = () => {
    const tokenGet = localStorage.getItem("token")
    const navigate = useNavigate()
    const dataVerify = ()=>{
        axios.post("http://localhost:3002/dailyLife/userVerify", {token : tokenGet}).then((res)=>{
            console.log(res.data.data)
            localStorage.setItem("userInfos", JSON.stringify(res.data.data))
            navigate("/dashboard")
          }).catch((error)=>{
            console.log(error)
            toast.error(error.response.data.message)
          })
    }
    return (
        <section className="bg-dark" style={{height: "100vh"}}>
            <Toaster />
            <div className='container'>
            <div className="wrapcon">
                <div className="insidewrap">
                    <h1>Well Come Our Website</h1>
                    <button className="btn btn-light mt-4" onClick={dataVerify}>Start</button>
                </div>
            </div>
        </div>
        </section>
    )
}

export default WellComePage
