import React from 'react'
import './SideMenu.css'
import n from '../../images/N.png'
import share from '../../images/share.png' 
import snow from '../../images/snow.png' 
import db from '../../images/db.png' 
import pc from '../../images/pc.png' 
import graph from '../../images/graph.png' 
import bulb from '../../images/bulb.png' 
import calendar from '../../images/calendar.png' 
import sino from '../../images/sino.png' 
import setting from '../../images/setting.png' 



function SideMenu() {
    return (
        <div>
            <nav className='menu'>

                <ul className='list'>

                    <li><a href="#" title="olá" className=" tooltip" ><img src={n}  className=" brdrbt log" alt="Unifi"></img></a></li>
                    <li><a href="#"><img src={share} className="log" alt="Unifi"></img></a></li>
                    <li><a href="#"><img src={snow} className="log" alt="Unifi"></img></a></li>
                    <li><a href="#"><img src={db} className="log" alt="Unifi"></img></a></li>
                    <li><a href="#"><img src={pc} className="log" alt="Unifi"></img></a></li>
                    <li><a href="/Filtro"><img src={graph} className="log" alt="Unifi"></img></a></li>
                    <li><a href="#"><img src={bulb} className="brdrbt log" alt="Unifi"></img></a></li>
                    <li><a href="#"><img src={calendar} className="log" alt="Unifi"></img></a></li>
                    <li><a href="#"><img src={sino} className="log" alt="Unifi"></img></a></li>
                    <li><a href="#"><img src={setting} className="log" alt="Unifi"></img></a></li>

                </ul>
            </nav>
        </div >
    )
}
export default SideMenu