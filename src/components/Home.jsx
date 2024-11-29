import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {  Link, useNavigate } from 'react-router-dom';

function Home() {
    const[users,setusers]= useState([]);
    const navigate = useNavigate();

    useEffect(()=>{

       fetch('http://localhost:3000/users')
       .then((response)=>response.json())
       .then((data)=>{
        console.log(data);
        setusers(data);
       })
       .catch((error)=>console.error("Error in fetching the data",error));

    },[]);


    
  const handleDelete=(id)=>{

    const confirm = window.confirm("would you like to Delete?");
    if(confirm){
      axios.delete('http://localhost:3000/users/' +id)
      .then(res=>{
        navigate('/');
      })
      .catch(err=>console.log(err));
    }
  }

  return (
    <div className='d-flex flex-column justify-content-center align-items-center bg-dark vh-100'>
    <h1 style={{color:"yellow"}} >List of users</h1>
    <div className='w-75 rounded bg-yellow border shadow p-4'>
      <div className='d-flex justify-content-end'>
        <Link className='btn btn-success' to="/create">Create +</Link>
        </div>
    <table className='table table-striped table-dark'>
      <thead>
        <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email-Id</th>
            <th>Date Of Birth</th>
            <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {
            users.map(user=>(
                <tr key={user.id}>
                    <td style={{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"}}>{user.id}</td>
                    <td style={{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"}}>{user.name}</td>
                    <td style={{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"}}>{user.email}</td>
                    <td style={{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"}}>{user.dob}</td>
                    <td>
                  <Link to={`/read/${user.id}`}  className='btn btn-sm btn-warning me-2'>Read</Link>  
                        <Link to={`/update/${user.id}`} className='btn btn-sm btn-primary me-2'>Edit</Link>
                        <button onClick={e =>handleDelete(user.id)} className='btn btn-sm btn-danger'>Delete</button>
                    </td>
                </tr>
            ))
        }
      </tbody>
    </table>
    </div></div>
  )

}

export default Home
