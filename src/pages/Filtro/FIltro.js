import './Filtro.css';
import search from '../../images/search.png'
import menu1 from '../../images/list.png'
import menu2 from '../../images/menu.png'



function Filtro() {
    return (

        <div className='principal'>
            <div className='first-filter'>

                <div className='px-1 btn-radius-left'>All</div>
                <div className='px-1'>Wireless</div>
                <div className='px-1 btn-radius-right'>Wired</div>

            </div>
            <div className='second-filter'>

                <div className='px-1 btn-radius-left'>All</div>
                <div className='px-1'>Users</div>
                <div className='px-1 btn-radius-right'>Guests</div>

            </div>
            <div className='filter-right'>

                <div className='bx-1'>+ Add Client</div>
                <div className='bx-2' >All configured clients</div>
                <div><a href="/"><img src={search} className="imgmenu" alt="Unifi"></img></a> </div>
                <div><a href="/"><img src={menu1} className="imgmenu" alt="Unifi"></img></a> </div>
                <div><a href="/"><img src={menu2} className="imgmenu" alt="Unifi"></img></a> </div>

            </div>
        </div>
    )
}

export default Filtro