import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';



function Login() {
    const navigate = useNavigate()
    const handleSubmit = () => {
        navigate('/adhome')

    }
    return (
        <div>
            <Container>
                <Row>
                    <Col lg={6}>

                        <div className='border border-black border-2 rounded ' style={{ marginTop: '20%' }}>
                            <h2 className='text-center' >Sign In</h2>
                            <div className='m-5'>
                                <Form>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">

                                        <Form.Control type="email" placeholder="Enter email" />

                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasicPassword">

                                        <Form.Control type="password" placeholder="Password" />
                                    </Form.Group>

                                    <div className='d-flex justify-content-center'>

                                        <Button onClick={handleSubmit} variant="primary" type="submit">
                                            Submit
                                        </Button>

                                    </div>
                                </Form>

                            </div>
                        </div>



                    </Col >
                    <Col lg={6}>
                        <img src="https://i.postimg.cc/B6V9zgJK/emsgif.jpg" alt="" />
                    </Col>
                </Row>

            </Container>

        </div>
    )
}

export default Login