import React, { useEffect, useContext } from 'react';
import Navbar from '../Navbar';
import { Link } from 'react-router-dom';
import { UserContext } from '../../context/UserContext'

const Logout = () => {
    const { logout } = useContext(UserContext);
    useEffect(() => {
        logout();
    }, [logout])

    return (
        <section>
            <Navbar />
            <div className="container" id="main__container">
                <div className="row">
                    <div className="col-md-4 mx-auto" style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: 'center' }}>
                        <h1 id="logoutpage_text" style={{ textAlign: "center" }}>
                            Oops, you have been logged out.
                        </h1>
                        <Link to="/login" className="btn__primary" id="logoutpage_button">LOGIN</Link>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default Logout;