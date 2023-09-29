import React, { useEffect, useState } from 'react'
import axios from "axios"

const RemainderMessage = () => {
    const [remainderdate, setRemainderdate] = useState({ today: "", remainday: "", message: "" })
    const [showMsg, setShowmsg] = useState("")
    const handelinputs = (e) => {
        setRemainderdate({
            ...remainderdate,
            [e.target.name]: e.target.value
        })
    }
    const sendDatas = (text) => {
        axios.post("http://localhost:3002/remainder/setting/remainderSet", remainderdate)
            .then((res) => {
                console.log(res)
            }).catch((error) => {
                console.log(error)
            })
    }
    const showAllusers = (id)=>{
        axios.get("http://localhost:3002/remainder/setting/showAllUser")
        .then((res)=>{
            console.log(res.data.data)
            setShowmsg(res.data.data)
        }).catch((error)=>{
            console.log(error)
        })
    }
    const deleteMessage = (id)=>{
        axios.post(`http://localhost:3002/remainder/setting/deltemessage/${id}`)
        .then((res)=>{
            console.log(res)
        }).catch((error)=>{
            console.log(error)
        })
    }
    const handelSubmit = (e) => {
        e.preventDefault()
        if (!remainderdate.today || !remainderdate.remainday || !remainderdate.message) {
            console.log("please fill up all the gap")
        } else {
            sendDatas(remainderdate)
        }
        console.log(remainderdate)
    }
    useEffect(()=>{
        showAllusers()
    }, [])
    return (
        <div className="remainMessage">
            <h2 className='mt-3'>Remainder Message</h2>
            <form onSubmit={handelSubmit}>
                <div className='row mt-5'>
                    <div className='col-md-3'>
                       
                    </div>
                    <div className='col-md-6'>
                        <div className='row'>
                            <div className='col-md-6'>
                                <label>To Day Date</label>
                                <input className='form-control' type="date" name="today" value={remainderdate.today} onChange={handelinputs} />
                            </div>
                            <div className='col-md-6'>
                                <label>Remainder Date</label>
                                <input className='form-control' type="date" name="remainday" value={remainderdate.remainday} onChange={handelinputs} />
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-12'>
                                <label>Write Message</label>
                                <textarea type="text" className='form-control' name="message" value={remainderdate.message} onChange={handelinputs}>

                                </textarea>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-12'>
                                <button className='btn btn-primary mt-3' type="submit">Set Remainder</button>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <table className='table'>
                                    <thead>
                                        <tr>
                                            <th>Message</th>
                                            <th>Date</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                   
                                        {showMsg && showMsg.map((data)=>{
                                            return <tr key={data._id}>
                                                <td>{data.message}</td>
                                                <td>{data.remainderDate}</td>
                                                <td><button className="btn btn-danger" onClick={()=>{deleteMessage(data._id)}}>Delete</button></td>
                                            </tr>
                                        })}
                                    
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-3'></div>
                </div>
            </form>
        </div>
    )
}

export default RemainderMessage
