import React, { useContext, useEffect, useState } from 'react'
import TableContent from '../Components/TableContent'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { registerContext, updateContext } from '../Components/ContextShare';
import Alert from 'react-bootstrap/Alert';
import { deleteEmployee, filterStatus, getAllEmployees } from '../services/allApis';
import AdminHeader from '../Components/AdminHeader';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';



function Employees() {
  
  const {updateStatus,setUpdateStatus}=useContext(updateContext)

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

const filterEmployees=async(data)=>
{const result = await filterStatus(data)
  setEmployees(result);
  console.log(result);
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

        {updateStatus?
        <Alert className='w-50 container p-3 my-5' variant={"success"} dismissible onClose={() => setUpdateStatus("")}>
          {updateStatus.fname+" "+updateStatus.lname} profile is updated 
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
      <div className='text-end py-2 px-5'>
        <h6 className='me-4 mb-2'>filter employees</h6>
        <ButtonGroup aria-label="Basic example">
        <Button onClick={()=>filterEmployees('active')} variant="info">Active</Button>
        <Button onClick={()=>filterEmployees('inactive')} variant="warning">Inactive</Button>
        <Button onClick={getEmployees}  variant="secondary">All</Button>
        </ButtonGroup>
      </div>

      <TableContent empArray={employees} deleteEmp={removeEmployee}></TableContent>

    </div>
  )
}

export default Employees
