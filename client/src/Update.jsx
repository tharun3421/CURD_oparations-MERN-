import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const Update = () => {
    const {id}=useParams()
    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [age,setAge]=useState('')
    const navigate=useNavigate('')

    useEffect(()=>{
        axios.get(`http://localhost:5000/getUser/${id}`)
        // .then(result=>console.log(result))
        .then(result => {
            const user = result.data;
            setName(user.name);
            setEmail(user.email);
            setAge(user.age);
        })
        .catch(err=>console.log(err))
    },[])

const update=(e)=>{
    e.preventDefault();
    axios.put('http://localhost:5000/updateUser/'+id,{name,email,age})
    .then(result=>{
        console.log(result)
        navigate('/')
    })
    .catch(err=>console.log(err))
}

  return (
    <div className="d-flex vh-100 bg-secondary justify-content-center align-item-center">
        <div className="w-50 bg-white rounded p-4 m-5" >
            <form onSubmit={update}>
                <h2>Update User</h2>
                <div className="mb-3 mt-3">
                    <label htmlFor="">Name</label>
                    <input type="text" placeholder='Enter Name '  className='form-control' value={name} onChange={(e)=>setName(e.target.value)}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="">Email</label>
                    <input type="eamil" placeholder='Enter Email'  className='form-control' value={email} onChange={(e)=>setEmail(e.target.value)}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="">Age</label>
                    <input type="text" placeholder='Enter Age'  className='form-control' value={age} onChange={(e)=>setAge(e.target.value)}/>
                </div>
                <button className='btn btn-success'>Submit</button>
            </form>
        </div>
    </div>
  )
}

export default Update