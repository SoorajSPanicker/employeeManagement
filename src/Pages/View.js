import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getEmployee } from '../services/allApis'
import { Col, Row } from 'react-bootstrap'
import BASE_URL from '../services/base_url'
import ListGroup from 'react-bootstrap/ListGroup';
import AdminHeader from '../Components/AdminHeader'




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
            <AdminHeader></AdminHeader>
            <Row>
                <Col>
                    <h1>{emp.fname + " " + emp.lname}</h1>
                    <img className='w-75 p-5' style={{ height: '600px' }} src={`${BASE_URL}/UPLOADS/${emp.profile}`} alt="" />
                </Col>
                <Col>
                    <ListGroup className='mt-5 pt-5 pe-5'>
                        <ListGroup.Item className='mt-2 fs-3'> <b className='me-5'>First Name</b> {emp.fname}</ListGroup.Item>
                        <ListGroup.Item className='mt-2 fs-3'> <b className='me-5'>Last Name</b> {emp.lname}</ListGroup.Item>
                        <ListGroup.Item className='mt-2 fs-3'> <b className='me-5'>Email</b> {emp.email}</ListGroup.Item>
                        <ListGroup.Item className='mt-2 fs-3'> <b className='me-5'>Mobile</b> {emp.mobile}</ListGroup.Item>
                        <ListGroup.Item className='mt-2 fs-3'> <b className='me-5'>Gender</b> {emp.gender}</ListGroup.Item>
                        <ListGroup.Item className='mt-2 fs-3'> <b className='me-5'>Status</b> {emp.status}</ListGroup.Item>
                        <ListGroup.Item className='mt-2 fs-3'> <b className='me-5'>Location</b> {emp.location}</ListGroup.Item>
                    </ListGroup>
                </Col>
            </Row>

        </div>
    )
}

export default View
