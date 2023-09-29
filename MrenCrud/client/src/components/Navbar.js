import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-dark">
                <div className="container">
                    <a className="navbar-brand text-light">DailyLife</a>
                    <div className="justify-content-end" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <Link className='btn btn-outline-light' to="/login">Sign In</Link>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
