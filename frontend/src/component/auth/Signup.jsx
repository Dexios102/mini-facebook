import React, { useState } from 'react';
import Navbar from '../Navbar';
import { Link, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import { signupUser } from './actions';

const Signup = () => {
    const [err, setErr] = useState(false);
    const [loading, setLoading] = useState(false);
    let navigator = useNavigate();
    const formik = useFormik({
        initialValues: {
            username: "",
            email: "",
            password1: "",
            password2: "",
        },

        onSubmit: async (values) => {
            setLoading(true);
            let newUser = await signupUser(values);
            if (newUser) {
                navigator('/login');
            } else {
                setErr(true);
                setLoading(false);
            }
        }

    })
    return (
        <section>
            <Navbar />
            <div className="container" id="main__container">
                <div className="row">
                    <div className="col-md-4 mx-auto">
                        <form onSubmit={formik.handleSubmit} id="login__content" className="card p-2" style={{ background: "#fff" }}>
                            <h1 className='loginpage_text' style={{ textAlign: "center" }}>
                                CREATE NEW ACCOUNT              </h1>
                            <input type="text" id="login__input" name="username" className="form-control" placeholder="Username" onChange={formik.handleChange} value={formik.values.username} />
                            <input type="email" id="login__input" name="email" className="form-control mt-2" placeholder="Email" onChange={formik.handleChange} value={formik.values.email} />
                            <input type="password" id="login__input" name="password1" className="form-control mt-2" placeholder="Password" onChange={formik.handleChange} value={formik.values.password1} />
                            <input type="password" id="login__input" name="password2" className="form-control mt-2 mb-3" placeholder="Confirm Password" onChange={formik.handleChange} value={formik.values.password2} />
                            {err && <p className="text-danger">Error Occoured. Try Again</p>}
                            <button type="submit" id="logoutpage_button" className="btn__primary">
                                {loading ? "Signing Up" : "SIGNUP"}
                            </button>
                            <Link to="/login" id="Create_Account" className="mt-2 text-dark">Login</Link>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Signup;