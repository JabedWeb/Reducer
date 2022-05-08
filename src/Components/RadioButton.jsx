import React, { useState } from 'react'
import { Col,Row, Container} from 'react-bootstrap'

const RadioButton = () => {

    //catch the radio button value for normal Form
  const [radiobutton,setRadiobutton]=useState('Male')



    //catch the radio button value for normal Form
    const [radioGet,setRadioGet]=useState({
        name : '',
        developerGender : ''
    })

    const {name,developerGender}=radioGet


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
                    <input onChange={e=> setRadiobutton(e.target.value)} name='gender' value='Male' type="radio" checked={radiobutton==='Male'}/>
                    <br />

                    <label>Male :</label>
                    <input onChange={e=> setRadiobutton(e.target.value)} name='gender' value='Female' type="radio" checked={radiobutton==='Female'}/>
                    <br />

                    <label>Other :</label>
                    <input onChange={e=> setRadiobutton(e.target.value)} name='gender' value='Other' type="radio" checked={radiobutton==='Other'}/>
                </div>

                <p>Gender :{radiobutton} </p>

            </form>
            </Col>
        </Row>
    </Container>
    <hr/>
    <Container>
        <Row className='mt-4'>
            <Col>
            <form>
                <input type="text" value={name} onChange={e=> setRadioGet({...radioGet,name : e.target.value})} />
                <div>
                    <h3>Type Your Gender : More data Get</h3>
                    <br/>
                    <label>Male :</label>
                    <input name='gender' value='Male'  type="radio" />
                    <br />

                    <label>Male :</label>
                    <input  name='gender' value='Female' type="radio"/>
                    <br />

                    <label>Other :</label>
                    <input name='gender' value='Other' type="radio" />
                </div>
                <hr />
                <h4>Live Output</h4>
                <p>Developer Name : {name} </p>
                <p>Developer Gender :{developerGender} </p>
            </form>
            </Col>
        </Row>
    </Container>
  </>
  )
}

export default RadioButton