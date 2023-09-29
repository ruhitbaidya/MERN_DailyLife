import React, { useState } from 'react'
import axios from "axios"
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
    const navigate = useNavigate()
    const [regText, setRegText] = useState({ email: "", password: "" })
    const handelInput = (e) => {
        setRegText({
            ...regText,
            [e.target.name]: e.target.value
        })
    }
    const sendLogin = ()=>{
        axios.post("http://localhost:3002/dailyLife/login", regText)
        .then((res)=>{
            console.log(res.data.token)
            toast.success(res.data.message)
            localStorage.setItem("token", res.data.token)
            navigate("/wellcome")
        }).catch((error)=>{
            console.log(error)
            toast.error(error.response.data.message)
        })
    }
    const handelSubmit = (e) => {
        e.preventDefault()
        sendLogin()
        console.log(regText)
    }
    return (
        <section className="py-5" style={{height : "100vh", background : "rgb(102, 95, 76)"}}>
            <div className='container'>
                <div className='row'>
                    <Toaster />
                    <div className="col-md-3"></div>
                    <div className="col-md-6">
                        <h3 className="mt-5 text-center text-light">Login Here</h3>
                        <div className="form-design">
                            <form onSubmit={handelSubmit}>
                                <div className="row">
                                    <div className="col-md-12">
                                        <label htmlFor="email" className="text-light">Email</label>
                                        <input type="email" name="email" value={regText.email} placeholder="Write Your Email" className="form-control my-2" onChange={handelInput} />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <label htmlFor="password" className="text-light">Password</label>
                                        <input type="password" name="password" value={regText.password} placeholder="Write Your Password" className="form-control my-2" onChange={handelInput} />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="d-grid gap-2">
                                            <button className="btn btn-outline-light my-3" type="submit">Submit</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-md-3"></div>
                </div>
            </div>
        </section>
    )
}

export default LoginPage
