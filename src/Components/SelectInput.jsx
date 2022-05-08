import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'



const SelectInput = () => {

  const [radiobutton,setRadiobutton]=useState('')

  return (

    <>
    <Container>
        <Row className='mt-4'>
            <Col>
            <form>
                <div>
                    <h3>Type Your Skill : Only Value Data Get</h3>
                    <br/>
                    
                    <select name="select" onChange={e=> setRadiobutton(e.target.value)}>
                      <option value="Web Designer">Web Designer</option>
                      <option value="Web Developer">Web Developer</option>
                    </select>
                    <br />
                </div>
                <p>Skill :{radiobutton}  </p>

            </form>
            </Col>
        </Row>
    </Container>
  </>
  )
}

export default SelectInput