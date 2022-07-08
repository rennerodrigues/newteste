import './Listagem.css';


function Listagem() {
    return(
        <div className='trconfig'>
            <table className='tableofc'>
                <tr className='tabletr'>
                    <th className='col1'>NAME</th>
                    <th className='col2'>IP ADRESS</th>
                    <th className='col3'>EXPERIENCE</th>
                    <th className='col4'>CONNECTION</th>
                    <th className='col5'>AP/PORT</th>
                    <th className='col6'>ACTIVITY</th>
                    <th className='col7'>ACTIVITY DOWN</th>
                    <th className='col8'>ACTIVITY UP</th>
                    <th className='col9'>UPTIME</th>

                </tr>
            </table>

        </div>
    )
}

export default Listagem 