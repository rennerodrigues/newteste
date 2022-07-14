import './Filtro.css';
import search from '../../images/search.png'
import menu1 from '../../images/list.png'
import menu2 from '../../images/menu.png'



function Filtro() {
    return (

        <div className='principal'>
            <div className='first-filter '>

                <div className='px-1 filterhover btn-radius-left'><a href='#' >All</a> </div>
                <div className='px-1'><a href='#' >Wireless</a></div>
                <div className='px-1 btn-radius-right'> <a href='#' >Wired</a></div>

            </div>
            <div className='second-filter'>

                <div className='px-1 btn-radius-left'><a href='#' >All</a></div>
                <div className='px-1'><a href='#' >Users</a></div>
                <div className='px-1 btn-radius-right'><a href='#' >Guests</a></div>

            </div>
            <div className='filter-right'>

                <div className='bx-1'><a href='#' >+ Add Client</a></div>
                <div className='bx-2' ><a href='#' >All configured clients</a></div>
                <div><a href="/"><img src={search} className="imgmenu" alt="Unifi"></img></a> </div>
                <div><a href="/"><img src={menu1} className="imgmenu" alt="Unifi"></img></a> </div>
                <div><a href="/"><img src={menu2} className="imgmenu" alt="Unifi"></img></a> </div>

            </div>
        </div>
    )
}

export default Filtro