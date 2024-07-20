import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Update from './Update'
import axios from 'axios'
const User = () => {
    const {id}=useParams()
    const [user,setUser]=useState([])

    useEffect(()=>{
        axios.get('http://localhost:5000/')
        .then(result=>setUser(result.data))
        .catch(err=>console.log(err))
    },[])
    const deleteUser=(id)=>{
        axios.delete('http://localhost:5000/deleteUser/'+id)
        .then(result=>{console.log(result)
        window.location.reload()})
        
        .catch(err=>console.log(err))
    }

return (
    <div className="d-flex vh-100 bg-secondary justify-content-center align-item-center ">
        <div className="w-50 bg-white rounded p-4 m-5">
            <Link to='/create' className='btn btn-success '> Add +</Link>
        <table className='table'>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Age</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {user.map((user)=>{
                return  <tr key={user._id}>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.age}</td>
                    <td>
                    <Link to={`/update/${user._id}`} className='btn btn-success me-3'> update</Link>
                        <button className='btn btn-danger'
                        onClick={(e)=>deleteUser(user._id)}>
                            Delete</button>
                        </td>
                    </tr>
                })}
            </tbody>
        </table>
        </div>
    </div>
)}

export default User