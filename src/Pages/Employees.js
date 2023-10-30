import React, { useContext, useEffect, useState } from 'react'
import TableContent from '../Components/TableContent'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { registerContext } from '../Components/ContextShare';
import Alert from 'react-bootstrap/Alert';
import { getAllEmployees } from '../services/allApis';



function Employees() {
  const { registerUpdate, setRegisterUpdate } = useContext(registerContext)
  const [employees, setEmployees] = useState([])
  const getEmployees = async () => {
    const result = await getAllEmployees()
    // console.log(result);
    setEmployees(result.data);
  }
  useEffect(() => {
    getEmployees()
  }, [])
  console.log(employees);
  return (

    <div >

      {registerUpdate ?
        <Alert className='w-50 container p-3 my-5' variant={"success"} dismissible onClose={() => setRegisterUpdate("")}>
          {registerUpdate} is added successfully
        </Alert>
        : ""}
      <div className='m-5 w-25 '>
        <FloatingLabel
          controlId="floatingInput"
          label="search employee"
          className="mb-3 border shadow "
        >
          <Form.Control type="text" placeholder="Employee name" />
        </FloatingLabel>
      </div>
      <TableContent empArray={employees}></TableContent>

    </div>
  )
}

export default Employees
