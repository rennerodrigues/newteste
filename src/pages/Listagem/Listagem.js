import './Listagem.css';
import Filtro from '../Filtro/FIltro';
import leftright from '../../images/left-right.png' 
import info from '../../images/info.png'
import down_arrow from '../../images/down_arrow.png' 




function Listagem() {
    return(

        <div className='menufiltro'>
            <Filtro />

            <div className='trconfig'>
                <table className='tableofc'>
                    <tr className='tabletr'>
                    
                        <th className='col0'></th>
                        <th className='col1'>NAME</th>
                        <th className='col2'>IP ADRESS</th>
                        <th className='col3'>EXPERIENCE</th>
                        <th className='col4'>CONNECTION</th>
                        <th className='col5'>AP/PORT</th>
                        <th className='col6'>ACTIVITY  
                        <img src={info} className="imglist" alt="info"></img>  
                        <img src={leftright} className="imglist" alt="arrow"></img></th>
                        <th className='col7'>ACTIVITY DOWN
                        <img src={down_arrow} className="imglist" alt="down-arrow"></img> 
                        </th>
                        <th className='col8'>ACTIVITY UP</th>
                        <th className='col9'>UPTIME</th>

                    </tr>
                </table>

            </div>
        </div>
    )
}

export default Listagem 