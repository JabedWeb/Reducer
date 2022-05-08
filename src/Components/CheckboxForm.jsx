import React, { useState } from 'react'
import { Col,Row, Container} from 'react-bootstrap'

const CheckboxForm = () => {

    //catch the radio button a value from normal Form
  const [radiobutton,setRadiobutton]=useState(false)


  return (
  <>
    <Container>
        <Row className='mt-4'>
            <Col>
            <form>
                <div>
                    <h3>Type Your Gender : Only Value Data Get</h3>
                    <br/>
                    <label>Male :</label>
                    <input onChange={e=> setRadiobutton(e.target.checked)}  type="checkbox" checked={radiobutton}/>
                    <br />
                </div>
                <p>Gender :{radiobutton ? "Yes" : "No"}  </p>

            </form>
            </Col>
        </Row>
    </Container>
  </>
  
)
}

export default CheckboxForm