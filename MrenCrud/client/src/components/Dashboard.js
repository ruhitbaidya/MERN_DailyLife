import React, { useEffect, useState } from 'react'
import { FaBell, FaBars } from "react-icons/fa6";
import { NavLink, useNavigate } from 'react-router-dom';
import RemainderMessage from './allProject/RemainderMessage';
import axios from "axios"
import toast, { Toaster } from 'react-hot-toast';
import WatchDec from './WatchDec';
const Dashboard = () => {
    const [compo, setCompo] = useState("")
    const [togle, settogl] = useState(false)
    const [name, setName] = useState("")
    // const [dates, setDates] = useState("")
    const [notification, setNotificatio] = useState()

    const getData = () => {
        let date = new Date();
        let month = date.getMonth() + 1;
        let day = date.getDate();
        let year = date.getFullYear();
        if (day <= 9) {
            day = '0' + day
        }
        if (month <= 9) {
            month = '0' + month
        }
        axios.get("http://localhost:3002/remainder/setting/findpost")
            .then((res) => {
                console.log(res.data.data)
                setNotificatio(res.data.data)
            }).catch((error) => {
                console.log(error)
            })
    }
    useEffect(() => {
        const infos = JSON.parse(localStorage.getItem("userInfos"))
        setName(infos)
        getData()
    }, [])
    const navigate = useNavigate()
    const conponentHandel = (text) => {
        if (text == "Remainder") {
            setCompo("Remainder")
        }
    }
    const logOut = () => {
        localStorage.removeItem("token")
        localStorage.removeItem("userInfos")
        navigate("/login")
        setName("")
    }
    
    // console.log(notification.length)
    return (
        <section>
            {notification && notification.length > 0 ? toast.success("You Have a New Remainder message", { duration: 6000}) : ""}
            <nav className="bg-primary py-2">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="d-flex heroProfile">
                                <div className="d-image">
                                    <img src="https://ucarecdn.com/05f649bf-b70b-4cf8-90f7-2588ce404a08/" alt="image" />
                                </div>
                                <div>
                                    <h5 style={{ textTransform: "capitalize" }}>{name.name}</h5>
                                </div>
                                <Toaster position="bottom-right"/>
                            </div>
                        </div>
                        <div className="col-md-5 heroProfilese">
                            <input type="text" placeholder='Search....' className="form-control rounded-1 bg-light m-2" />
                        </div>
                        <div className="col-md-4">
                            <div className="d-flex justify-content-between lstMenu">
                                <div className="text-center">
                                    <h4><WatchDec /></h4>
                                </div>
                                <div>
                                    <span onClick={() => settogl(!togle)}><FaBell /></span>
                                    <span className={notification && notification.length > 0 ? "active-light" : ""}></span>
                                </div>
                                <div>
                                    <div className="dropdown">
                                        <a className="btn dropdown p-0" data-bs-toggle="dropdown" aria-expanded="false">
                                            <span className='brsIcon'> <FaBars /></span>
                                        </a>
                                        {togle && <div className='notification'>
                                            {notification && notification.map((data) => <p key={data._id} className="bg-light p-3 rounded-1">{data.message}</p>)}
                                        </div>}
                                        <ul className="dropdown-menu dropdown-menu-primary mt-3">
                                            <li><a className="dropdown-item active" href="#">Profile</a></li>
                                            <li><a className="dropdown-item" href="#">Password Change</a></li>
                                            <li><a className="dropdown-item" href="#">Dev Information</a></li>
                                            <li><a className="dropdown-item" onClick={logOut}>Log Out</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            <div className="container-fluid">
                <div className="row mt-1">
                    <div className="col-md-2">
                        <ul className="list-group">
                            <NavLink><li className="list-group-item" onClick={() => conponentHandel("calculator")}>Calculator</li></NavLink>
                            <NavLink><li className="list-group-item" onClick={() => conponentHandel("recCRUD")}>React CRUD</li></NavLink>
                            <NavLink><li className="list-group-item" onClick={() => conponentHandel("Remainder")}>Remainder Message</li></NavLink>
                            <NavLink><li className="list-group-item" onClick={() => conponentHandel("quizqApp")}>Quize App</li></NavLink>
                            <NavLink><li className="list-group-item" onClick={() => conponentHandel("randompass")}>Random Password</li></NavLink>
                            <NavLink><li className="list-group-item" onClick={() => conponentHandel("randomColor")}>Random Color</li></NavLink>
                            <NavLink><li className="list-group-item" onClick={() => conponentHandel("countryApp")}>Country Information</li></NavLink>
                        </ul>
                    </div>
                    <div className="col-md-10">
                        {compo === "Remainder" ? <RemainderMessage /> : "Not Metch"}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Dashboard
