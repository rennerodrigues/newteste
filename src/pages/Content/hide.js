import React, { useState } from "react";
import { Container } from "react-bootstrap";


function Showhide() {
    const [visible, setVisible] = useState(false);


    return (

        <Container>
            <div className="col-sm-2 mt-2">
                <input type="text" className="" name="" value="" onClick={() => setVisible(true)} />
            </div>


            {visible &&
                <div>
                    <input type="text" className="" name="" value="" />
                </div>
            }
        </Container>
    )
}
export default Showhide