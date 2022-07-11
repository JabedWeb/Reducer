import React, { useReducer } from 'react'

import {Container,Col,Row,Card} from 'react-bootstrap'
import { initialMessage, messageReducer } from '../reducers/messageReducer';



const Home = () => {
    const [messageState,dispatch]=useReducer(messageReducer,initialMessage);
  return (
    <Container className="my-4">
    <Row className="justify-content-center">
    <Col md={5}>
      <Card className="shadow">
        <Card.Body>
        {/* <input type="text" value={msg} onChange={(e)=> dispatch({type : '',payload : ''})} className="form-control"/> */}
        <input type="text" value={messageState.name} placeholder='name' onChange={(e)=> dispatch({ type : '', payload : {name : e.target.value}})} className="form-control"/>
        <br/>
        <input type="text" placeholder='Email' value={messageState.age} onChange={(e)=> dispatch({ type : '', payload :{ age : e.target.value}})}className="form-control"/>
        <br/>
        <input type="text" placeholder='Skill' value={messageState.skill} onChange={(e)=> dispatch({ type : '', payload :{ skill : e.target.value}})} className="form-control"/>
        <br/>
        {/* <input type="text" value={msg} onChange={(e)=> dispatch({name : "Jabed",age : 20})} className="form-control"/> */}
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