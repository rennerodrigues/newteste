import React from 'react'
import './Navbar.css'
import logo from '../../images/logo.jpg'
import logo2 from '../../images/aparelhoheader.png'



function Navbar() {
    return (
        <div className='container'>
            <nav className='navNav'>
                    
                        <li><a href="/"><img src={logo} className="logo" alt="Unifi"></img></a> </li>
                        <li><a href="/"><img src={logo2} className="logo1" alt="Unifi"></img></a></li>

                    
                <ul className='navUl'>
                    <div className='btnright'>
                        <li><a href="/login" className="nava"> CURRENT SITE</a></li>
                        <li><a href="/username" className="nava"> USERNAME</a></li>
                        </div>


                </ul>
            </nav>
        </div>
    )
}
export default Navbar