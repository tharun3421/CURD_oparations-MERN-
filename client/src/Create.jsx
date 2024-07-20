import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const Create = () => {
    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [age,setAge]=useState('')
    const navigate=useNavigate()
    const handlesubmit=((e)=>{
        e.preventDefault()
        axios.post('http://localhost:5000/create',{name,email,age})
        .then(result=>{
            console.log(result)
            navigate('/')
    })
        .catch(err=>console.log(err))

    })
  return (
    <div className="d-flex vh-100 bg-secondary justify-content-center align-item-center">
        <div className="w-50 bg-white rounded p-4 m-5" >
            <form onSubmit={handlesubmit}>
                <h2>Add User</h2>
                <div className="mb-3 mt-3">
                    <label htmlFor="">Name</label>
                    <input type="text" placeholder='Enter Name '  className='form-control' onChange={(e)=>setName(e.target.value)}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="">Email</label>
                    <input type="eamil" placeholder='Enter Email'  className='form-control' onChange={(e)=>setEmail(e.target.value)}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="">Age</label>
                    <input type="text" placeholder='Enter Age'  className='form-control' onChange={(e)=>setAge(e.target.value)}/>
                </div>
                <button className='btn btn-success'>Submit</button>
            </form>
        </div>
    </div>
  )
}

export default Create