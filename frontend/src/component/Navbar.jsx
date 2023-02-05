/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../context/UserContext';
import Logo from '../assets/IPOST LOGO.png';
/* import { useFormik } from 'formik' */

const Navbar = () => {
    let { user } = useContext(UserContext); // authenticated user

    /* let navigate = useNavigate(); */

    /* let formik = useFormik({
        initialValues: {
            query: ""
        },
        onSubmit: (values) => {
            navigate(`/search?q=${values.query}`)
        }
    }) */

    return (
        <nav className="navbar navbar-expand-lg navbar-light sticky-top" style={{ background: "	#2E8B57" }}>
            <div className="container">
                <Link className="navbar-brand text-primary" to="/">
                    <img src={Logo} alt="logo" style={{ height: "4em", width: "9em" }} />
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>


                <div className="collapse navbar-collapse" id="navbarNavDropdown">

                    <ul className="ms-auto navbar-nav">
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <i className="fas fa-user-circle" id="user_icon" />
                            </a>
                            {user.data ?
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <li><Link className="dropdown-item" to="/profile">Profile</Link></li>
                                    <li><Link className="dropdown-item" to="/logout">Logout</Link></li>
                                </ul> :
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <li><Link className="dropdown-item" to="/login">Login</Link></li>
                                    <li><Link className="dropdown-item" to="/signup">Signup</Link></li>
                                </ul>
                            }

                        </li>
                    </ul>
                </div>

            </div>
        </nav>
    )
}

export default Navbar;