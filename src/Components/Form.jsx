import React from 'react'
import { Col,Row, Container, Form, Button } from 'react-bootstrap'

const Forms = () => {
  return (
  <>
    <Container>
        <Row className='mt-4'>
            <Col>
            <Form>

                <Form.Group className='my-3'>
                <Form.Control  type='text' placeholder='Type Your Name'/>
                </Form.Group>

                <Form.Group className='my-3'>
                <Form.Control  type='email' placeholder='Type Your Email'/>
                </Form.Group>

                <Form.Group className='my-3'>
                <Form.Control  type='phone' placeholder='Type Your Phone Number'/>
                </Form.Group>

                <Form.Group className='my-3'>
                <Form.Control  type='password' placeholder='Type Password'/>
                </Form.Group>
                
                <Form.Group className='my-3'>
                <Form.Control  type='password' placeholder='Type Password'/>
                </Form.Group>


                <Form.Group className='my-3'>
                <label >Please Select Your Skill</label>
                   <br />
                   <br />
                <select>
                    <option>Web Designer</option>
                    <option>Web Developer</option>
                </select>
                </Form.Group>

                <Form.Group className='my-3'>
                <Form.Check label='Designer' type='checkbox'/>
                </Form.Group>
            
                <Button type='submit'> Submit Form</Button>

            </Form>
            </Col>
        </Row>
    </Container>
  </>
  )
}

export default Forms