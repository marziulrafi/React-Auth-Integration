import React from 'react';
import { Link } from 'react-router';

const Login = () => {
    return (
<div className="card bg-base-100 w-full max-w-sm mx-auto mt-14 shrink-0 shadow-2xl">
                <h1 className="text-3xl text-center mt-3 font-bold">Login now!</h1>
                    <div className="card-body">
                        <form className="fieldset">
                            <label className="label">Email</label>
                            <input type="email" className="input" placeholder="Email" />
                            <label className="label">Password</label>
                            <input type="password" className="input" placeholder="Password" />
                            <div><a className="link link-hover">Forgot password?</a></div>
                            <button className="btn btn-neutral mt-4">Login</button>
                        </form>

                        <p>New to this site? <Link className='underline text-blue-600' to="/register">Register Here</Link></p>
                    </div>
                </div>
    );
};

export default Login;