import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import { adminLoginApi } from '../services/allApis';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';






function Login() {

    //validate states
    const [emailValid, setEmailValid] = useState(true)
    const [pswValid, setPswValid] = useState(true)
    //state to hold inputs
    const [loginInputs, setLoginInputs] = useState({
        email: "",
        psw: ""
    })
    const setInputs = (e) => {
        const { value, name } = e.target
        if (name == 'email') {
            if (value.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) {
                setEmailValid(true)
                setLoginInputs({ ...loginInputs, [name]: value })
            }
            else {
                setEmailValid(false)
            }

        }
        if (name == 'psw') {
            if (value.match(/^[a-zA-Z0-9]+$/)) {
                setPswValid(true)
                setLoginInputs({ ...loginInputs, [name]: value })
            }
            else {
                setPswValid(false)
            }

        }



    }
    console.log(loginInputs);
    const navigate = useNavigate()
    const handleSubmit = async () => {
        const { email, psw } = loginInputs
        if (email == "" || psw == "") {
            alert("all inputs are required")
        }
        else {
            // const{data}=await adminLoginApi(loginInputs)
            // console.log(data);
            const result = await adminLoginApi(loginInputs)
            if (result.status >= 200 && result.status < 300) {
                
                // alert(result.data)
                navigate('/adhome')
            }
            else {
                // alert(result.response.data)
                // console.log(result);
                toast.error(result.response.data, {
                    position: "top-center",
                    autoClose: 1000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    });
            }


        }


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

                                        <Form.Control name="email" onChange={(e) => setInputs(e)} type="email" placeholder="Enter email" />

                                    </Form.Group>
                                    {!emailValid &&
                                        <div ><p className='text-danger'>*Invalid Email !</p></div>}

                                    <Form.Group className="mb-3" controlId="formBasicPassword">

                                        <Form.Control name="psw" onChange={(e) => setInputs(e)} type="password" placeholder="Password" />
                                    </Form.Group>
                                    {!pswValid &&
                                        <div ><p className='text-danger'>*Invalid password !</p></div>}
                                    <div className='d-flex justify-content-center'>

                                        <Button onClick={handleSubmit} variant="primary" type="button">
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
            <ToastContainer />
            

        </div>
    )
}

export default Login
