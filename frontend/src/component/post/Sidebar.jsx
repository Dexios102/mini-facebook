import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className="card p-2" id="sidebar">
            <Link to="/" id="sidebar_link" className="text-dark my-1" > <i className="fas fa-home"></i>Home</Link>
            <Link to="/profile" id="sidebar_link" className="text-dark my-1"> <i className="fas fa-user-circle"></i> Profile</Link>
            <Link to="/" id="sidebar_link" className="text-dark my-1"> <i className="fas fa-envelope"></i> Messages</Link>
            <Link to="/" id="sidebar_link" className="text-dark my-1"> <i className="fas fa-compass"></i> Explore</Link>
            <Link to="/search" id="sidebar_link" className="text-dark my-1"> <i className="fas fa-search"></i> Search</Link>
        </div>
    )
}

export default Sidebar;