import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';

function Create() {

  const [values,Setvalues] = useState({
    name:'',
    email:'',
    dob:''
  })

  const navigate = useNavigate();

  const handleSubmit=(event)=>{
    event.preventDefault();
        axios.post('http://localhost:3000/users',values)
         .then(res=>{
          console.log(res);
          navigate('/')
         })
         .catch((err)=>console.log(err));
  }

  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center bg-dark'>
     <div className='w-50 border bg-dark shadow px-5 pt-3 pb-5 rounded'>
      <h1  style={{color:"yellow"}}>Create User</h1>
      <form onSubmit={handleSubmit}>
        <div className='mb-2'>
          <label htmlFor='name'>Name:</label>
          <input type='text ' onChange={e =>Setvalues({...values,name:e.target.value})} name='name' className='form-control ' placeholder='Enter Name'/>
        </div>
        <div className='mb-2'>
          <label htmlFor='Email'>Email:</label>
          <input type='email ' onChange={e =>Setvalues({...values,email:e.target.value})} name='email' className='form-control ' placeholder='Enter Email'/>
        </div>
        <div className='mb-2'>
          <label htmlFor='dob'>Date of Birth:</label>
          <input type='text ' onChange={e =>Setvalues({...values,dob:e.target.value})} name='dob' className='form-control ' placeholder='Enter Date of Birth'/>
        </div>
        <button className='btn btn-success'>Submit</button>
        <Link to="/" className='btn btn-primary ms-3'>Back</Link>
      </form>
     </div>
    </div>
  )
}

export default Create
