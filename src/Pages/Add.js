import React from 'react'

function Add() {
  return (
    <div id='home'>
      <h1 className='d-flex justify-content-center'>Register Employee Details</h1>
      <form class="container p-5 w-75 mt-2 shadow bg-white">
        <div className='p-2 text-center'>
          <img className='rounded-circle' style={{height:'140px',width:'15%'}} src="https://i.postimg.cc/nLFGLD9x/ppic.jpg" alt="" />
        </div>
        <div className='row'>
          <div className='col-6'>
            <label for="exampleFormControlInput1" class="form-label mt-3">First Name</label>
            <input required type="text" class="form-control" id="exampleFormControlInput1" />
            <label for="exampleFormControlInput2" class="form-label mt-3">Email</label>
            <input required type="email" class="form-control" id="exampleFormControlInput2" placeholder="name@example.com" />
            <label for="exampleFormControlInput3" class="mt-4">gender</label> <br />
            <div className='ms-3' htmlFor="">
              <input type="radio" name='gender' value={'male'} id='m' /><label class="form-check-label" for="m">
                Male
              </label>
              <input type="radio" name='gender' value={'female'} id='f' /><label class="form-check-label" for="f">
                Female
              </label>
            </div>
            <label for="exampleFormControlInput5" class="form-label mt-5" htmlFor=''>Choose profile picture</label>
            <input required type="file" class="form-control" id="exampleFormControlInput5" />

          </div>
          <div className='col-6'>
            <label for="exampleFormControlInput7" class="form-label mt-3">Last Name</label>
            <input name='lname' required type="text" class="form-control" id="exampleFormControlInput7" />
            <label for="exampleFormControlInput8" class="form-label mt-3">Mobile</label>
            <input name='mobile' required type="text" class="form-control" id="exampleFormControlInput8" />
            <label for="example1" class="dropdown form-label mt-4">Employee Status</label>
            <select class="form-select" aria-label="Default select example">
              <option class="dropdown-item disabled" aria-disabled="true">Select</option>
              <option class="dropdown-item" value={'active'}>Active</option>
              <option class="dropdown-item" value={'inactive'}>Inactive</option>
              {/* <option value="3">Three</option> */}
            </select> <br />
            <label for="example2" class="form-label mt-1">Location</label>
            <input name='location' required type="text" class="form-control" id="example2" />


          </div>

        </div>
        <div className='text-center mt-5'>
          <button style={{backgroundColor:'#2d0d80',color:'white'}} type='submit' class="btn btn-primary w-50" >Submit</button> <br />
          <button style={{backgroundColor:'#2d0d80',color:'white'}} type='submit' class="btn btn-primary w-20 mt-4" >Go to home</button>

        </div>
      </form>
    </div>
  )
}

export default Add