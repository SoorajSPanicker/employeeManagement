import React from 'react'
import TableContent from '../Components/TableContent'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';


function Employees() {
  return (
    <div >
      <div className='m-5 w-25 '>
      <FloatingLabel
        controlId="floatingInput"
        label="search employee"
        className="mb-3 border shadow "
      >
        <Form.Control type="text" placeholder="Employee name" />
      </FloatingLabel>
      </div>
      <TableContent></TableContent>

    </div>
  )
}

export default Employees
