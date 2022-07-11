import Home from "./Components/Home";
import {Container,Col,Row,Card} from 'react-bootstrap'
import { useState } from "react";
function App() {

  const [msg,setMsg]=useState('I love Reducer');
  return (
   <>

  <Container className="my-4">
    <Row className="justify-content-center">
    <Col md={5}>
      <Card className="shadow">
        <Card.Body>
        <input type="text" className="form-control"/>
        <h1>{msg}</h1>
        </Card.Body>
      </Card>
    </Col>
    </Row>
  </Container>

   </>
  );
}

export default App;
