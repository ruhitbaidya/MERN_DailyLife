import React, { useState } from 'react'
import axios from "axios"
import toast, { Toaster } from 'react-hot-toast';
import {useNavigate} from "react-router-dom"
const RegisterFrom = () => {
    const navigate = useNavigate();
    const [regText, setRegText] = useState({ Fname: "", Lname: "", email: "", password: "", answar: "" })
    const handelInput = (e) => {
        setRegText({
            ...regText,
            [e.target.name] : e.target.value
        })
    }
    const sendData = ()=>{
        axios.post("http://localhost:3002/dailyLife/register", regText)
        .then((res)=>{
            console.log(res)
            toast.success("register Create Successfull")
            navigate("/login")
            setRegText({ Fname: "", Lname: "", email: "", password: "", answar: "" })
        }).catch((error)=>{
            toast.error(error.response.data.message)
        })
    }
    const handelSubmit = (e)=>{
        e.preventDefault()
        sendData()
        console.log(regText)
    }
    return (
        <>
            <form onSubmit={handelSubmit}>
                <Toaster />
                <div className="row">
                    <div className="col-md-6">
                        <label htmlFor="fName" className="text-light">First Name</label>
                        <input type="text" name="Fname" value={regText.Fname} placeholder="Write Your First name" className="form-control my-2" onChange={handelInput} />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="lName" className="text-light">Last Name</label>
                        <input type="text" name="Lname" value={regText.Lname} placeholder="Write Your Last name" className="form-control my-2" onChange={handelInput} />
                    </div>
                </div>
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
                        <label htmlFor="just" className="text-light">Please Choice Your Favirite</label>
                        <input type="text" name="answar" value={regText.answar} placeholder="Write Your Favirate" className="form-control my-2" onChange={handelInput} />
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
        </>
    )
}

export default RegisterFrom
