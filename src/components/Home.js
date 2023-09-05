import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className='homediv'>
      
      <div >
        <h1>Welcome Home</h1>
        <div className='navdiv'>
        <li>Contact US</li>
        <li>About</li>
        <li>Home</li>
        </div>
      </div>
       <img src="https://www.hdwallpapers.in/thumbs/2019/iron_spider_7-t2.jpg" alt="" />
      <Link to="/">Logout</Link>
    </div>
  )
}

export default Home