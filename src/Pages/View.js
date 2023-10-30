import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getEmployee } from '../services/allApis'
import { Col, Row } from 'react-bootstrap'
import BASE_URL from '../services/base_url'
import ListGroup from 'react-bootstrap/ListGroup';



function View() {
    const [emp, setEmp] = useState({})


    const { id } = useParams()
    // console.log(id);
    const getEmp = async () => {
        const result = await getEmployee(id)
        if (result.status >= 200 && result.status < 300) {
            setEmp(result.data)
            console.log(result);
        }
    }
    useEffect(() => {
        getEmp()
    }, [])
    console.log(emp);
    return (
        <div>
            <Row>
                <Col>
                    <h1>{emp.fname + " " + emp.lname}</h1>
                    <img className='w-75 p-5' style={{ height: '600px' }} src={`${BASE_URL}/UPLOADS/${emp.profile}`} alt="" />
                </Col>
                <Col>
                    <ListGroup>
                        <ListGroup.Item>{emp.fname}</ListGroup.Item>
                        <ListGroup.Item>{emp.lname}</ListGroup.Item>
                        <ListGroup.Item>{emp.email}</ListGroup.Item>
                        <ListGroup.Item>{emp.mobile}</ListGroup.Item>
                        <ListGroup.Item>{emp.gender}</ListGroup.Item>
                        <ListGroup.Item>{emp.status}</ListGroup.Item>
                        <ListGroup.Item>{emp.location}</ListGroup.Item>
                    </ListGroup>
                </Col>
            </Row>

        </div>
    )
}

export default View
