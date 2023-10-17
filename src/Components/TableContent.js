import React from 'react'
import Table from 'react-bootstrap/Table';
import Dropdown from 'react-bootstrap/Dropdown';

function TableContent() {
    return (
        <div >
            <h1 className='text-center mt-3'>List of employees</h1>
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
                    <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>+919876543210</td>
                        <td><div className='bg-info text-center rounded'>Active</div></td>
                        <td className='text-center'><img src="https://i.postimg.cc/nLFGLD9x/ppic.jpg" style={{ width: '50px', height: '60px' }} alt="" /></td>
                        <td> <Dropdown>
                            <Dropdown.Toggle variant="primary" id="dropdown-basic" className='w-100'>
                            <i class="fa-solid fa-list"></i> 
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">View</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Edit</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Delete</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown></td>
                    </tr>
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
            </Table>

        </div>
    )
}

export default TableContent