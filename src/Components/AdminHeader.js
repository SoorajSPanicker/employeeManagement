import React from 'react'
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';

function AdminHeader() {
  return (
    <div style={{backgroundColor:'#9d03fc'}} className='p-2'>
        <Nav
      activeKey="/home"
      
    >
      <Nav.Item style={{textDecoration:'none'}}>
        <a  style={{textDecoration:'none'}} href="/adhome" className='text-white ms-5' >Home</a>
      </Nav.Item>
      <Link to={'/add'} style={{textDecoration:'none'}}>
          <Nav.Item>
            <a  style={{textDecoration:'none'}} className='text-white ms-5' >Add Employee</a>
          </Nav.Item>
      </Link>
      <Link to={'/emp'} style={{textDecoration:'none'}}>
          <Nav.Item>
            <a  style={{textDecoration:'none'}} className='text-white ms-5' eventKey="/emp">List Employees</a>
          </Nav.Item>
      </Link>
      {/* <Nav.Item>
        <Nav.Link eventKey="disabled" disabled>
          Disabled
        </Nav.Link>
      </Nav.Item> */}
    </Nav>
    </div>
  )
}

export default AdminHeader