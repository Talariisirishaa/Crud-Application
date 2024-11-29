import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

function Update() {
  const { id } = useParams();
  const navigate = useNavigate();


  const [values, setValues] = useState(null); // Initialize as null
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {

    axios.get('http://localhost:3000/users/' + id)
      .then((res) => {
        setValues(res.data); 
        setLoading(false);   
      })
      .catch((error) => {
        console.error('Error in fetching the data', error);
        setLoading(false);
      });
  }, [id]);

  const handleUpdate = (event) => {
    event.preventDefault();
    console.log('Data to be updated:', values); 
    axios.put('http://localhost:3000/users/' + id, values)
      .then((res) => {
        console.log('Update response:', res); 
        navigate('/');
      })
      .catch((err) => console.error('Error in updating the data:', err));
  };


  if (loading) {
    return <div className="d-flex justify-content-center align-items-center vh-100">Loading...</div>;
  }

 
  if (!values) {
    return <div className="d-flex justify-content-center align-items-center vh-100">No user found!</div>;
  }

  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center bg-dark'>
      <div className='w-50 border bg-dark shadow px-5 pt-3 pb-5 rounded'>
        <h1 style={{ color: 'yellow' }}>Update Existing User</h1>
        <form onSubmit={handleUpdate}>
          <div className='mb-2'>
            <label htmlFor='name'>Name:</label>
            <input
              type='text'
              value={values.name || ''} 
              onChange={(e) => setValues({ ...values, name: e.target.value })}
              name='name'
              className='form-control'
              placeholder='Enter Name'
            />
          </div>
          <div className='mb-2'>
            <label htmlFor='email'>Email:</label>
            <input
              type='email'
              value={values.email || ''} 
              onChange={(e) => setValues({ ...values, email: e.target.value })}
              name='email'
              className='form-control'
              placeholder='Enter Email'
            />
          </div>
          <div className='mb-2'>
            <label htmlFor='dob'>Date of Birth:</label>
            <input
              type='text'
              value={values.dob || ''} 
              onChange={(e) => setValues({ ...values, dob: e.target.value })}
              name='dob'
              className='form-control'
              placeholder='Enter Date of Birth'
            />
          </div>
          <button className='btn btn-success'>Update</button>
          <Link to='/' className='btn btn-primary ms-3'>Back</Link>
        </form>
      </div>
    </div>
  );
}

export default Update;

