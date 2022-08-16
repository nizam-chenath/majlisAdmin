import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className="nav-container">
            <nav className="navbar">
                <div className="logo">logo</div>
                <div className="navitems">
                    <Link to='/coursedetails'>
                        <div className="links">
                            Course Details
                        </div>
                    </Link>
                    <Link to="/events">
                        <div className="links">
                            Events
                        </div>
                    </Link>
                    <Link to="/studymaterials">
                        <div className="links">
                            Study Materials
                        </div>
                    </Link>
                    <Link to="/gallery">
                        <div className="links">
                            Gallery
                        </div>
                    </Link>
                </div>

            </nav>
        </div>
    )
}

export default Navbar