import React from 'react'
import Table from 'react-bootstrap/Table';
import Dropdown from 'react-bootstrap/Dropdown';
import { Button } from 'react-bootstrap';
import BASE_URL from '../services/base_url';
import { Link } from 'react-router-dom';


function TableContent({empArray,deleteEmp}) {
    return (
        <div >{
            empArray.length>0?

            <div> <h1 className='text-center mt-3'>List of employees</h1>
            <Table className='w-75 container my-5 shadow-lg' striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Full Name</th>

                        <th>Mobile</th>
                        <th>status</th>
                        <th>profile</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        empArray.map((i,index)=>
                        <tr>
                        <td>{index+1}</td>
                        <td>{i.fname+" "+i.lname}</td>
                        <td>{i.mobile}</td>
                        <td className='text-center'><Button variant={i.status=="active"?"info":"warning"} className='text-center rounded'>{i.status}</Button></td>
                        <td className='text-center'><img src={`${BASE_URL}/uploads/${i.profile}`} style={{ width: '50px', height: '60px' }} alt="" /></td>
                        <td> <Dropdown>
                            <Dropdown.Toggle variant="primary" id="dropdown-basic" className='w-100'>
                            <i class="fa-solid fa-list"></i> 
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Link to={`/view/${i._id}`} style={{textDecoration:'none'}}><Dropdown.Item href='ac1'>View</Dropdown.Item></Link>
                                <Link to={`/edit/${i._id}`} style={{textDecoration:'none'}}><Dropdown.Item href='ac2' >Edit</Dropdown.Item></Link>
                                <Dropdown.Item onClick={()=>deleteEmp(i._id)}>Delete</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown></td>
                    </tr>
                        )
                    }

                    
                    {/* <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>3</td>
          <td colSpan={2}>Larry the Bird</td>
          <td>@twitter</td>
        </tr> */}
                </tbody>
            </Table></div>: <h1>No employees added</h1>

    }

        </div>
    )
}

export default TableContent
