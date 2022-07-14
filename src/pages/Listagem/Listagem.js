import './Listagem.css';
import Filtro from '../Filtro/FIltro';
import leftright from '../../images/left-right.png'
import info from '../../images/info.png'
import down_arrow from '../../images/down_arrow.png'
import monitor from '../../images/monitor.png'
import Pagination from '../Content/Pagination';




function Listagem() {
    return (

        <div className='menufiltro'>
            <Filtro />

            <div className='trconfig'>
                <table className='tableofc'>
                    <thead>
                        <tr className='tabletr'>

                            <th className='col0'></th>
                            <th className='col1'>NAME</th>
                            <th className='col2'>IP ADRESS</th>
                            <th className='col3'>EXPERIENCE</th>
                            <th className='col4'>CONNECTION</th>
                            <th className='col5'>AP/PORT</th>
                            <th className='col6'>ACTIVITY
                                <img src={info} className="imglist sideactv" alt="info"></img>
                                <img src={leftright} className="imglist" alt="arrow"></img></th>
                            <th className='letter-blue col7'>ACTIVITY DOWN
                                <img src={down_arrow} className="imglist" alt="down-arrow"></img>
                            </th>
                            <th className='col8'>ACTIVITY UP</th>
                            <th className='col9'>UPTIME</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className='tabletr' >

                            <th className='col0'><img src={monitor} className="imglist" alt="pc_monitor"></img> </th>
                            <th className='col1'>AirdeLuisFelipe</th>
                            <th className='col2'>192.168.107.8</th>
                            <th className='letter-green col3'>90%</th>
                            <th className='col4'>Default</th>
                            <th className='letter-blue col5'>Unifi Switch 16P#12</th>
                            <th className='col6'>
                                <div className="progress">
                                    <div className="bar" style={{ 'width': '100%' }}>
                                    </div>
                                </div>
                            </th>
                            <th className='letter-green col7'>2.58TB</th>
                            <th className='letter-purple col8'>4.7TB</th>
                            <th className='col9'>37d3h28m18s</th>
                        </tr>

                    </tbody>
                    <tbody>
                        <tr className='tabletr' >

                            <th className='col0'><img src={monitor} className="imglist" alt="pc_monitor"></img> </th>
                            <th className='col1'>00:e0:4c6805:1e</th>
                            <th className='col2'>192.168.107.8</th>
                            <th className='letter-green col3'>72%</th>
                            <th className='col4'>Nexfar</th>
                            <th className='letter-blue col5'>Nexfar Unifi AP01</th>
                            <th className='col6'>
                                <div className="progress">
                                    <div className="bar" style={{ 'width': '35%' }}>
                                    </div>
                                </div>
                            </th>
                            <th className='letter-green col7'>3.38GB</th>
                            <th className='letter-purple col8'>137MB</th>
                            <th className='col9'>2h59m56s</th>
                        </tr>

                    </tbody>
                    <tbody>
                        <tr className='tabletr' >

                            <th className='col0'><img src={monitor} className="imglist" alt="pc_monitor"></img> </th>
                            <th className='col1'>floripa</th>
                            <th className='col2'>192.168.107.8</th>
                            <th className='letter-green col3'>90%</th>
                            <th className='col4'>Default</th>
                            <th className='letter-blue col5'>Unifi Switch 16P#12</th>
                            <th className='col6'>
                                <div className="progress">
                                    <div className="bar" style={{ 'width': '15%' }}>
                                    </div>
                                </div>
                            </th>
                            <th className='letter-green col7'>2.58TB</th>
                            <th className='letter-purple col8'>4.7TB</th>
                            <th className='col9'>37d3h28m18s</th>
                        </tr>

                    </tbody>
                    <tbody>
                        <tr className='tabletr' >

                            <th className='col0'><img src={monitor} className="imglist" alt="pc_monitor"></img> </th>
                            <th className='col1'>veritas</th>
                            <th className='col2'>192.168.107.8</th>
                            <th className='letter-green col3'>90%</th>
                            <th className='col4'>Default</th>
                            <th className='letter-blue col5'>Unifi Switch 16P#12</th>
                            <th className='col6'>
                                <div className="progress">
                                    <div className="bar" style={{ 'width': '15%' }}>
                                    </div>
                                </div>
                            </th>
                            <th className='letter-green col7'>2.58TB</th>
                            <th className='letter-purple col8'>4.7TB</th>
                            <th className='col9'>37d3h28m18s</th>
                        </tr>

                    </tbody>
                    <tbody>
                        <tr className='tabletr' >

                            <th className='col0'><img src={monitor} className="imglist" alt="pc_monitor"></img> </th>
                            <th className='col1'>mac-mini-dev</th>
                            <th className='col2'>192.168.107.8</th>
                            <th className='letter-green col3'>90%</th>
                            <th className='col4'>Default</th>
                            <th className='letter-blue col5'>Unifi Switch 16P#12</th>
                            <th className='col6'>
                                <div className="progress">
                                    <div className="bar" style={{ 'width': '18%' }}>
                                    </div>
                                </div>
                            </th>
                            <th className='letter-green col7'>2.58TB</th>
                            <th className='letter-purple col8'>4.7TB</th>
                            <th className='col9'>37d3h28m18s</th>
                        </tr>

                    </tbody>
                    <tbody>
                        <tr className='tabletr' >

                            <th className='col0'><img src={monitor} className="imglist" alt="pc_monitor"></img> </th>
                            <th className='col1'>00:e0:4c6805:1e</th>
                            <th className='col2'>192.168.107.8</th>
                            <th className='letter-green col3'>90%</th>
                            <th className='col4'>Default</th>
                            <th className='letter-blue col5'>Unifi Switch 16P#12</th>
                            <th className='col6'>
                                <div className="progress">
                                    <div className="bar" style={{ 'width': '17%' }}>
                                    </div>
                                </div>
                            </th>                            <th className='letter-green col7'>2.58TB</th>
                            <th className='letter-purple col8'>4.7TB</th>
                            <th className='col9'>37d3h28m18s</th>
                        </tr>

                    </tbody>
                    <tbody>
                        <tr className='tabletr' >

                            <th className='col0'><img src={monitor} className="imglist" alt="pc_monitor"></img> </th>
                            <th className='col1'>frontdoor</th>
                            <th className='col2'>192.168.107.8</th>
                            <th className='letter-green col3'>32%</th>
                            <th className='col4'>Default</th>
                            <th className='letter-blue col5'>Unifi Switch 16P#12</th>
                            <th className='col6'>
                                <div className="progress">
                                    <div className="bar" style={{ 'width': '20%' }}>
                                    </div>
                                </div>
                            </th>
                            <th className='letter-green col7'>2.58TB</th>
                            <th className='letter-purple col8'>4.7TB</th>
                            <th className='col9'>37d3h28m18s</th>
                        </tr>

                    </tbody>
                    <tbody>
                        <tr className='tabletr' >

                            <th className='col0'><img src={monitor} className="imglist" alt="pc_monitor"></img> </th>
                            <th className='col1'>00:e0:4c6805:1e</th>
                            <th className='col2'>192.168.107.8</th>
                            <th className='letter-green col3'>90%</th>
                            <th className='col4'>Default</th>
                            <th className='letter-blue col5'>Unifi Switch 16P#12</th>
                            <th className='col6'>
                                <div className="progress">
                                    <div className="bar" style={{ 'width': '100%' }}>
                                    </div>
                                </div>
                            </th>                            <th className='letter-green col7'>2.58TB</th>
                            <th className='letter-purple col8'>4.7TB</th>
                            <th className='col9'>37d3h28m18s</th>
                        </tr>

                    </tbody>
                    <tbody>
                        <tr className='tabletr' >

                            <th className='col0'><img src={monitor} className="imglist" alt="pc_monitor"></img> </th>
                            <th className='col1'>00:e0:4c6805:1e</th>
                            <th className='col2'>192.168.107.8</th>
                            <th className='letter-green col3'>90%</th>
                            <th className='col4'>Default</th>
                            <th className='letter-blue col5'>Unifi Switch 16P#12</th>
                            <th className='col6'>
                                <div className="progress">
                                    <div className="bar" style={{ 'width': '20%' }}>
                                    </div>
                                </div>
                            </th>
                            <th className='letter-green col7'>2.58TB</th>
                            <th className='letter-purple col8'>4.7TB</th>
                            <th className='col9'>37d3h28m18s</th>
                        </tr>

                    </tbody>
                    <tbody>
                        <tr className='tabletr' >

                            <th className='col0'><img src={monitor} className="imglist" alt="pc_monitor"></img> </th>
                            <th className='col1'>00:e0:4c6805:1e</th>
                            <th className='col2'>192.168.107.8</th>
                            <th className='letter-green col3'>90%</th>
                            <th className='col4'>Default</th>
                            <th className='letter-blue col5'>Unifi Switch 16P#12</th>
                            <th className='col6'>
                                <div className="progress">
                                    <div className="bar" style={{ 'width': '26%' }}>
                                    </div>
                                </div>
                            </th>
                            <th className='letter-green col7'>2.58TB</th>
                            <th className='letter-purple col8'>4.7TB</th>
                            <th className='col9'>37d3h28m18s</th>
                        </tr>

                    </tbody>
                    <tbody>
                        <tr className='tabletr' >

                            <th className='col0'><img src={monitor} className="imglist" alt="pc_monitor"></img> </th>
                            <th className='col1'>00:e0:4c6805:1e</th>
                            <th className='col2'>192.168.107.8</th>
                            <th className='letter-green col3'>90%</th>
                            <th className='col4'>Default</th>
                            <th className='letter-blue col5'>Unifi Switch 16P#12</th>
                            <th className='col6'>
                                <div className="progress">
                                    <div className="bar" style={{ 'width': '40%' }}>
                                    </div>
                                </div>
                            </th>
                            <th className='letter-green col7'>2.58TB</th>
                            <th className='letter-purple col8'>4.7TB</th>
                            <th className='col9'>37d3h28m18s</th>
                        </tr>

                    </tbody>
                    <tbody>
                        <tr className='tabletr' >

                            <th className='col0'><img src={monitor} className="imglist" alt="pc_monitor"></img> </th>
                            <th className='col1'>00:e0:4c6805:1e</th>
                            <th className='col2'>192.168.107.8</th>
                            <th className='letter-green col3'>90%</th>
                            <th className='col4'>Default</th>
                            <th className='letter-blue col5'>Unifi Switch 16P#12</th>
                            <th className='col6'>
                                <div className="progress">
                                    <div className="bar" style={{ 'width': '50%' }}>
                                    </div>
                                </div>
                            </th>
                            <th className='letter-green col7'>2.58TB</th>
                            <th className='letter-purple col8'>4.7TB</th>
                            <th className='col9'>37d3h28m18s</th>
                        </tr>

                    </tbody>
                    <tbody>
                        <tr className='tabletr' >

                            <th className='col0'><img src={monitor} className="imglist" alt="pc_monitor"></img> </th>
                            <th className='col1'>00:e0:4c6805:1e</th>
                            <th className='col2'>192.168.107.8</th>
                            <th className='letter-green col3'>90%</th>
                            <th className='col4'>Default</th>
                            <th className='letter-blue col5'>Unifi Switch 16P#12</th>
                            <th className='col6'>
                                <div className="progress">
                                    <div className="bar" style={{ 'width': '75%' }}>
                                    </div>
                                </div>
                            </th>
                            <th className='letter-green col7'>2.58TB</th>
                            <th className='letter-purple col8'>4.7TB</th>
                            <th className='col9'>37d3h28m18s</th>
                        </tr>

                    </tbody>
                    <tbody>
                        <tr className='tabletr' >

                            <th className='col0'><img src={monitor} className="imglist" alt="pc_monitor"></img> </th>
                            <th className='col1'>00:e0:4c6805:1e</th>
                            <th className='col2'>192.168.107.8</th>
                            <th className='letter-green col3'>90%</th>
                            <th className='col4'>Default</th>
                            <th className='letter-blue col5'>Unifi Switch 16P#12</th>
                            <th className='col6'>
                                <div className="progress">
                                    <div className="bar" style={{ 'width': '37%' }}>
                                    </div>
                                </div>
                            </th>
                            <th className='letter-green col7'>2.58TB</th>
                            <th className='letter-purple col8'>4.7TB</th>
                            <th className='col9'>37d3h28m18s</th>
                        </tr>

                    </tbody>
                    <tbody>
                        <tr className='tabletr' >

                            <th className='col0'><img src={monitor} className="imglist" alt="pc_monitor"></img> </th>
                            <th className='col1'>00:e0:4c6805:1e</th>
                            <th className='col2'>192.168.107.8</th>
                            <th className='letter-green col3'>90%</th>
                            <th className='col4'>Default</th>
                            <th className='letter-blue col5'>Unifi Switch 16P#12</th>
                            <th className='col6'>
                                <div className="progress">
                                    <div className="bar" style={{ 'width': '5%' }}>
                                    </div>
                                </div>
                            </th>
                            <th className='letter-green col7'>2.58TB</th>
                            <th className='letter-purple col8'>4.7TB</th>
                            <th className='col9'>37d3h28m18s</th>
                        </tr>

                    </tbody>
                    <tbody>
                        <tr className='tabletr' >

                            <th className='col0'><img src={monitor} className="imglist" alt="pc_monitor"></img> </th>
                            <th className='col1'>00:e0:4c6805:1e</th>
                            <th className='col2'>192.168.107.8</th>
                            <th className='letter-green col3'>90%</th>
                            <th className='col4'>Default</th>
                            <th className='letter-blue col5'>Unifi Switch 16P#12</th>
                            <th className='col6'>
                                <div className="progress">
                                    <div className="bar" style={{ 'width': '18%' }}>
                                    </div>
                                </div>
                            </th>
                            <th className='letter-green col7'>2.58TB</th>
                            <th className='letter-purple col8'>4.7TB</th>
                            <th className='col9'>37d3h28m18s</th>
                        </tr>

                    </tbody>
                    <tbody>
                        <tr className='tabletr' >

                            <th className='col0'><img src={monitor} className="imglist" alt="pc_monitor"></img> </th>
                            <th className='col1'>00:e0:4c6805:1e</th>
                            <th className='col2'>192.168.107.8</th>
                            <th className='letter-green col3'>90%</th>
                            <th className='col4'>Default</th>
                            <th className='letter-blue col5'>Unifi Switch 16P#12</th>
                            <th className='col6'>
                                <div className="progress">
                                    <div className="bar" style={{ 'width': '28%' }}>
                                    </div>
                                </div>
                            </th>
                            <th className='letter-green col7'>2.58TB</th>
                            <th className='letter-purple col8'>4.7TB</th>
                            <th className='col9'>37d3h28m18s</th>
                        </tr>

                    </tbody>
                    <tbody>
                        <tr className='tabletr' >

                            <th className='col0'><img src={monitor} className="imglist" alt="pc_monitor"></img> </th>
                            <th className='col1'>00:e0:4c6805:1e</th>
                            <th className='col2'>192.168.107.8</th>
                            <th className='letter-green col3'>90%</th>
                            <th className='col4'>Default</th>
                            <th className='letter-blue col5'>Unifi Switch 16P#12</th>
                            <th className='col6'>
                                <div className="progress">
                                    <div className="bar" style={{ 'width': '32%' }}>
                                    </div>
                                </div>
                            </th>
                            <th className='letter-green col7'>2.58TB</th>
                            <th className='letter-purple col8'>4.7TB</th>
                            <th className='col9'>37d3h28m18s</th>
                        </tr>

                    </tbody>
                    <tbody>
                        <tr className='tabletr' >

                            <th className='col0'><img src={monitor} className="imglist" alt="pc_monitor"></img> </th>
                            <th className='col1'>frontdoor</th>
                            <th className='col2'>192.168.107.8</th>
                            <th className='letter-green col3'>32%</th>
                            <th className='col4'>Default</th>
                            <th className='letter-blue col5'>Unifi Switch 16P#12</th>
                            <th className='col6'>
                                <div className="progress">
                                    <div className="bar" style={{ 'width': '8%' }}>
                                    </div>
                                </div>
                            </th>
                            <th className='letter-green col7'>2.58TB</th>
                            <th className='letter-purple col8'>4.7TB</th>
                            <th className='col9'>37d3h28m18s</th>
                        </tr>

                    </tbody> <tbody>
                        <tr className='tabletr' >

                            <th className='col0'><img src={monitor} className="imglist" alt="pc_monitor"></img> </th>
                            <th className='col1'>frontdoor</th>
                            <th className='col2'>192.168.107.8</th>
                            <th className='letter-green col3'>32%</th>
                            <th className='col4'>Default</th>
                            <th className='letter-blue col5'>Unifi Switch 16P#12</th>
                            <th className='col6'>
                                <div className="progress">
                                    <div className="bar" style={{ 'width': '7%' }}>
                                    </div>
                                </div>
                            </th>
                            <th className='letter-green col7'>2.58TB</th>
                            <th className='letter-purple col8'>4.7TB</th>
                            <th className='col9'>37d3h28m18s</th>
                        </tr>

                    </tbody> <tbody>
                        <tr className='tabletr' >

                            <th className='col0'><img src={monitor} className="imglist" alt="pc_monitor"></img> </th>
                            <th className='col1'>frontdoor</th>
                            <th className='col2'>192.168.107.8</th>
                            <th className='letter-green col3'>32%</th>
                            <th className='col4'>Default</th>
                            <th className='letter-blue col5'>Unifi Switch 16P#12</th>
                            <th className='col6'>
                                <div className="progress">
                                    <div className="bar" style={{ 'width': '13%' }}>
                                    </div>
                                </div>
                            </th>
                            <th className='letter-green col7'>2.58TB</th>
                            <th className='letter-purple col8'>4.7TB</th>
                            <th className='col9'>37d3h28m18s</th>
                        </tr>

                    </tbody>

                   
                </table>

            </div>
        </div >
    )
}


export default Listagem 