import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addEmployee } from '../services/allApis';


function Add() {
  //state for validations
  const [fnameValid, setfnameValid] = useState(true)
  const [emailValid, setEmailValid] = useState(true)

  const [lnameValid, setlnameValid] = useState(true)
  const [mobileValid, setmobileValid] = useState(true)
  const [locationValid, setlocationValid] = useState(true)
  // state to hold form inputs
  const [inputs, setInputs] = useState({
    fname: "",
    lname: "",
    email: "",
    mobile: "",
    gender: "",
    status: "",
    location: ""
  })

  const setData = (e) => {
    const { value, name } = e.target
    if (name == 'fname') {
      if (value.match(/^[a-zA-Z ]+$/)) {
        setfnameValid(true)
        setInputs({ ...inputs, [name]: value })
      }
      else {
        setfnameValid(false)
      }

    }
    if (name == 'email') {
      if (value.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) {
        setEmailValid(true)
        setInputs({ ...inputs, [name]: value })
      }
      else {
        setEmailValid(false)
      }

    }

    if (name == 'lname') {
      if (value.match(/^[a-zA-Z ]+$/)) {
        setlnameValid(true)
        setInputs({ ...inputs, [name]: value })
      }
      else {
        setlnameValid(false)
      }

    }

    if (name == 'mobile') {
      if (value.match(/^[+][0-9]{10,12}$/)) {
        setmobileValid(true)
        setInputs({ ...inputs, [name]: value })
      }
      else {
        setmobileValid(false)
      }

    }

    if (name == 'location') {
      if (value.match(/^[a-zA-Z0-9 ]+$/)) {
        setlocationValid(true)
        setInputs({ ...inputs, [name]: value })
      }
      else {
        setlocationValid(false)
      }

    }

    if (name == 'gender' || name == 'status') {
      setInputs({ ...inputs, [name]: value })
    }


  }
  //state to store image
  const [image, setImage] = useState("")

  const imageChoose = (e) => {
    setImage(e.target.files[0]);
  }

  //state to hold image preview url
  const [imgPreview, setImgPreview] = useState("")
  useEffect(() => {
    if (image) {
      setImgPreview(URL.createObjectURL(image));

    }
  }, [image])
  // console.log(inputs);
  const HandleAdd = async (e) => {
    e.preventDefault()
    // alert('button clicked')
    const { fname, lname, gender, status, email, location, mobile } = inputs

    if (fname == "") {
      toast.error('please enter fname')
    }
    else if (lname == "") {
      toast.error('please enter lname')
    }
    else if (gender == "") {
      toast.error('please choose gender')
    }
    else if (status == "") {
      toast.error('please enter status')
    }
    else if (email == "") {
      toast.error('please enter email')
    }
    else if (location == "") {
      toast.error('please enter locatiion')
    }
    else if (mobile == "") {
      toast.error('please enter mobile')
    }
    else if (image == "") {
      toast.error('please choose image file')
    }
    else {
      // toast.success('all set')
      //header(the body data contain file type content)
      const headerConfig = {
        "Content-Type": "multipart/form-data"
      }
      //body data as formData because it contain file type content
      const data = new FormData()
      //append  fname, lname, status, mobile, location, gender, email, profile
      data.append("fname",fname)
      data.append("lname",lname)
      data.append("status",status)
      data.append("mobile",mobile)
      data.append("location",location)
      data.append("gender",gender)
      data.append("email",email)
      data.append("user_profile",image)
      //api

      const result = await addEmployee(data,headerConfig)
      console.log(result);
    }

  }
  return (
    <div id='home'>
      <h1 className='d-flex justify-content-center'>Register Employee Details</h1>
      <form class="container p-5 w-75 mt-2 shadow bg-white">
        <div className='p-2 text-center'>
          <img className='rounded-circle' style={{ height: '140px', width: '15%' }} src={imgPreview ? imgPreview : "https://i.postimg.cc/nLFGLD9x/ppic.jpg"} alt="" />
        </div>
        <div className='row'>
          <div className='col-6'>
            <label for="exampleFormControlInput1" class="form-label mt-3">First Name</label>
            <input onChange={(e) => setData(e)} name='fname' required type="text" class="form-control" id="exampleFormControlInput1" />
            {!fnameValid &&
              <div ><p className='text-danger'>*Include characters only</p></div>}
            <label for="exampleFormControlInput2" class="form-label mt-3">Email</label>
            <input onChange={(e) => setData(e)} name='email' required type="email" class="form-control" id="exampleFormControlInput2" placeholder="name@example.com" />
            {!emailValid &&
              <div ><p className='text-danger'>*Invalid Email !</p></div>}
            <label for="exampleFormControlInput3" class="mt-4">gender</label> <br />
            <div className='ms-3' htmlFor="">
              <input type="radio" onChange={(e) => setData(e)} name='gender' value={'male'} id='m' /><label class="form-check-label" for="m">
                Male
              </label>
              <input type="radio" onChange={(e) => setData(e)} name='gender' value={'female'} id='f' /><label class="form-check-label" for="f">
                Female
              </label>
            </div>
            <label for="exampleFormControlInput5" class="form-label mt-5" htmlFor=''>Choose profile picture</label>
            <input onChange={(e) => imageChoose(e)} required type="file" class="form-control" id="exampleFormControlInput5" />

          </div>
          <div className='col-6'>
            <label for="exampleFormControlInput7" class="form-label mt-3">Last Name</label>
            <input onChange={(e) => setData(e)} name='lname' required type="text" class="form-control" id="exampleFormControlInput7" />
            {!lnameValid &&
              <div ><p className='text-danger'>*Include characters only</p></div>}
            <label for="exampleFormControlInput8" class="form-label mt-3">Mobile</label>
            <input onChange={(e) => setData(e)} name='mobile' required type="text" class="form-control" id="exampleFormControlInput8" />
            {!mobileValid &&
              <div ><p className='text-danger'>*Include min 10 and max 13 digits</p></div>}
            <label for="example1" class="dropdown form-label mt-4">Employee Status</label>
            <select onChange={(e) => setData(e)} name='status' class="form-select" aria-label="Default select example">
              <option class="dropdown-item disabled" aria-disabled="true">Select</option>
              <option class="dropdown-item" value={'active'}>Active</option>
              <option class="dropdown-item" value={'inactive'}>Inactive</option>
              {/* <option value="3">Three</option> */}
            </select> <br />
            <label for="example2" class="form-label mt-1">Location</label>
            <input onChange={(e) => setData(e)} name='location' required type="text" class="form-control" id="example2" />
            {!locationValid &&
              <div ><p className='text-danger'>*Include characters and numbers only</p></div>}


          </div>

        </div>
        <div className='text-center mt-5'>
          <button onClick={(e) => HandleAdd(e)} style={{ backgroundColor: '#2d0d80', color: 'white' }} type='submit' class="btn btn-primary w-50" >Submit</button> <br />
          <button style={{ backgroundColor: '#2d0d80', color: 'white' }} type='submit' class="btn btn-primary w-20 mt-4" >Go to home</button>

        </div>
      </form>
      <ToastContainer />
    </div>
  )
}

export default Add
