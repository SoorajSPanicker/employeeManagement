import React, { useContext, useEffect, useState } from 'react'
import TableContent from '../Components/TableContent'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { registerContext } from '../Components/ContextShare';
import Alert from 'react-bootstrap/Alert';
import { deleteEmployee, getAllEmployees } from '../services/allApis';
import AdminHeader from '../Components/AdminHeader';




function Employees() {
  const { registerUpdate, setRegisterUpdate } = useContext(registerContext)
  const [employees, setEmployees] = useState([])
  const [searchData,setSearchData]=useState("")
  const getEmployees = async () => {
    const result = await getAllEmployees(searchData)
    // console.log(result);
    setEmployees(result.data);
  }

//delete Function
const removeEmployee=async(id)=>{
  const result= await deleteEmployee(id)
  if(result.status>=200 && result.status<300){
    getEmployees()
  }
}

  useEffect(() => {
    getEmployees()
  }, [searchData])
  // console.log(employees);
  console.log(searchData);
  return (

    <div >
      <AdminHeader></AdminHeader>

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
          <Form.Control onChange={(e)=>setSearchData(e.target.value)} type="text" placeholder="Employee name" />
        </FloatingLabel>
      </div>
      <TableContent empArray={employees} deleteEmp={removeEmployee}></TableContent>

    </div>
  )
}

export default Employees
