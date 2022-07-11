import React, { useReducer } from 'react'

import {Container,Col,Row,Card, Alert} from 'react-bootstrap'
import { initialMessage, messageReducer } from '../reducers/messageReducer';



const Home = () => {
    const [messageState,dispatch]=useReducer(messageReducer,initialMessage);
  return (
    <Container className="my-4">
    <Row className="justify-content-center">
    <Col md={5}>+
      <Card className="shadow">
        <Card.Body>
           {messageState.error && <Alert variant='danger'>Error Showing</Alert> }
        {/* <input type="text" value={msg} onChange={(e)=> dispatch({type : '',payload : ''})} className="form-control"/> */}
        <input type="text" value={messageState.name} placeholder='name' onChange={(e)=> dispatch({ type : 'DEVS_DATA_LOAD', payload : {name : e.target.value}})} className="form-control"/>
        <br/>
        <input type="text" placeholder='Email' value={messageState.age} onChange={(e)=> dispatch({ type : 'DEVS_DATA_LOAD', payload :{ age : e.target.value}})}className="form-control"/>
        <br/>
        <input type="text" placeholder='Skill' value={messageState.skill} onChange={(e)=> dispatch({ type : 'DEVS_DATA_LOAD', payload :{ skill : e.target.value}})} className="form-control"/>
        <br/>
        {/* <input type="text" value={msg} onChange={(e)=> dispatch({name : "Jabed",age : 20})} className="form-control"/> */}
        <select onChange={(e)=> dispatch({ type : 'AlERT_LOAD', payload :{ error : e.target.value}})} className="form-control" name="" id="">
          <option value="Start">Start</option>
          <option value="Off">Off</option>
        </select>
        
        <p>Name : {messageState.name}</p>
        <p>Email : {messageState.age}</p>
        <p>Skill : {messageState.skill}</p>
        </Card.Body>
      </Card>
    </Col>
    </Row>
  </Container>
  )
}

export default Home;