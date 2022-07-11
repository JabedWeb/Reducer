import React, { useReducer } from 'react'

import {Container,Col,Row,Card} from 'react-bootstrap'
import { useState } from "react";

// action catch data;
const reducer= (state,action)=>{
    return state =action.payload;
}

const Home = () => {

    //const [msg,setMsg]=useState('I love Reducer');

    const [msg,dispatch]=useReducer(reducer,"I love you");




  return (
    <Container className="my-4">
    <Row className="justify-content-center">
    <Col md={5}>
      <Card className="shadow">
        <Card.Body>
        {/* <input type="text" value={msg} onChange={(e)=> dispatch({type : '',payload : ''})} className="form-control"/> */}
        <input type="text" value={msg} onChange={(e)=> dispatch({payload :e.target.value})} className="form-control"/>
        {/* <input type="text" value={msg} onChange={(e)=> dispatch({name : "Jabed",age : 20})} className="form-control"/> */}
        <h1>{msg}</h1>
        </Card.Body>
      </Card>
    </Col>
    </Row>
  </Container>
  )
}

export default Home;