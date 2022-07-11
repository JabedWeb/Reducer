import React, { useReducer } from 'react'

import {Container,Col,Row,Card} from 'react-bootstrap'
import { useState } from "react";
import { initialMessage, messageReducer } from '../reducers/messageReducer';



const Home = () => {

    //const [msg,setMsg]=useState('I love Reducer');

    const [messageState,dispatch]=useReducer(messageReducer,initialMessage);




  return (
    <Container className="my-4">
    <Row className="justify-content-center">
    <Col md={5}>
      <Card className="shadow">
        <Card.Body>
        {/* <input type="text" value={msg} onChange={(e)=> dispatch({type : '',payload : ''})} className="form-control"/> */}
        <input type="text" value={messageState} placeholder='name' onChange={(e)=> dispatch({ type : '', payload :e.target.value})} className="form-control"/>
        <br/>
        <input type="text" placeholder='Email' value={messageState} onChange={(e)=> dispatch({ type : '', payload :e.target.value})} className="form-control"/>
        <br/>
        <input type="text" placeholder='Skill' value={messageState} onChange={(e)=> dispatch({ type : '', payload :e.target.value})} className="form-control"/>
        <br/>
        {/* <input type="text" value={msg} onChange={(e)=> dispatch({name : "Jabed",age : 20})} className="form-control"/> */}
        <p>Name : {messageState}</p>
        <p>Email : {messageState}</p>
        <p>Skill : {messageState}</p>
        </Card.Body>
      </Card>
    </Col>
    </Row>
  </Container>
  )
}

export default Home;