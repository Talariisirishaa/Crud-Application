import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';


function Read() {

  const[users,setusers]= useState([]);
  const {id} =useParams();

  useEffect(()=>{

     fetch('http://localhost:3000/users/' + id)
     .then((response)=>response.json())
     .then((data)=>{
      console.log(data);
      setusers(data);
     })
     .catch((error)=>console.error("Error in fetching the data",error));

  },[]); 

  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center bg-dark'>
      <div className='w-50 border bg-dark shadow px-5 pt-3 pb-5 rounded'>
        <h3  style={{color:"yellow"}} >User Details</h3>
        <div className='mb-2'>
          <strong style={{color:"white"}}> Name : {users.name}</strong>

        </div>
        <div className='mb-2'>
          <strong style={{color:"white"}}>Email:{users.email}</strong>

        </div>

        <div className='mb-3'>
          <strong style={{color:"white"}}>Date of Birth:{users.dob}</strong>

        </div>
        <Link to={`/update/${id}`} className='btn btn-success'>Update</Link>

        <Link to="/" className='btn btn-primary ms-3'>Back</Link>

      </div>
    </div>
  )
}

export default Read

