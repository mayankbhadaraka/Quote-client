import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { SIGNUP_USER } from '../graphQl/mutation';
import { useMutation } from '@apollo/client';

const Signup = () => {
  const [signupUser,{data,loading,error}] = useMutation(SIGNUP_USER);
    const [user,setuser]=useState({})
    if (loading) return <h1>Loading</h1>;
    if (error) {
      console.log(error.message);
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        signupUser({
          variables:{
            user:user
          }
        })
    }
    const handleChange=(e)=>{
        setuser({...user,[e.target.name]:e.target.value})
    }

  return (
    <div className='container my-container'>
      {
        error&&<div className='red card-panel'>{error.message}</div>
      }
      {
        data&&data.signUpUser&&<div className='green card-panel'>{data.signUpUser.firstName} is Signed up You can login now.</div>
      }
      <h5>Signup</h5>
      <form onSubmit={(e)=>handleSubmit(e)}>
        <input type="text" name='firstName' placeholder='firstName' onChange={handleChange}  required/>
        <input type="text" name='lastName' placeholder='lastName' onChange={handleChange}  required/>
        <input type="email" name='email' placeholder='email' onChange={handleChange}  required/>
        <input type="password" name='password' placeholder='password' onChange={handleChange}  required/>
        <Link to="/login"><p>Already have account?</p></Link>
        <button className='btn #512da8 deep-purple darken-2' type="submit">Signup</button>
      </form>
    </div>
  )
}

export default Signup
