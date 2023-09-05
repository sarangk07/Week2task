import React from 'react'
import {Link} from "react-router-dom"


function Login() {
  return (
    <div className='container-fluid formdiv'>
        <h2 className='h2'>Login</h2>
        <form action=""  className='container bg-secondary form'>
            <label htmlFor="">Name</label><br />
            <input type="text" /><br />
            <label htmlFor="">Passward</label><br />
            <input type="password" /><br /><br />
            <button className='btn btn-dark'><Link to="/home">Login</Link></button><br />
        </form>
    </div>
  )
}

export default Login