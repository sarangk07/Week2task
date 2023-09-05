import React from 'react';
import {Link} from "react-router-dom";



function Register() {



  return (
    <div className='container-fluid formdiv'>
      <h2>Register</h2>
        <form action="" className='container bg-secondary form'>
            <label htmlFor="">Name</label><br />
            <input type="text" id='name' placeholder='John'/><br />
            <label htmlFor="">Email</label><br />
            <input type="email" id='email' placeholder='sample@gmail.com'/><br />
            <label htmlFor="">New Password</label><br />
            <input type="password" id='password'/><br />
            <label htmlFor="">Confirm Password</label><br />
            <input type="password" /><br /><br />
            <button className='btn btn-dark button'><Link to="/login">Submit</Link></button>
        </form>
    </div>
  )
}

export default Register