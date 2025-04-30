// import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { use } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../contexts/AuthContext';
// import { auth } from '../firebase.init';

const Register = () => {

    const {createUser} = use(AuthContext)
    const navigate = useNavigate()

    const handleRegister = e => {
        e.preventDefault ();

        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        console.log(name, email, password);

        // Create User
        // createUserWithEmailAndPassword(auth, email, password)
        // .then(result => {
        //     console.log(result);
        // }).catch(error => {
        //     console.log(error);
        // })

        createUser(email, password)
        .then(result => {
                console.log(result);
                navigate('/')
            }).catch(error => {
                console.log(error);
            })
    }

    
    return (
        <div className="card bg-base-100 w-full max-w-sm mx-auto mt-14 shrink-0 shadow-2xl">
                <h1 className="text-3xl text-center mt-3 font-bold">Register Here</h1>
                    <div className="card-body">
                        <form onSubmit={handleRegister} className="fieldset">
                            <label className="label">Name</label>
                            <input type="text" className="input" name='name' placeholder="Enter Name" />
                            <label className="label">Email</label>
                            <input type="email" className="input" name='email' placeholder="Enter Email" />
                            <label className="label">Password</label>
                            <input type="password" className="input" name='password' placeholder="Password" />
                            
                            <button className="btn btn-neutral mt-4">Register</button>
                        </form>

                        <p className='mt-5'>Already have an account? <Link className='underline text-blue-600' to='/login'>Please Login</Link></p>
                    </div>
                </div>
    );
};

export default Register;