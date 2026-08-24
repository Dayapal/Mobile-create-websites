import axios from 'axios'
import React, { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

const Register = () => {
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: ""
    })

    const handleOnChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("http://localhost:3000/register", formData)
            console.log("User Register successfully");
            alert("User Register successsfully")
            setFormData({
                name: "",
                email: "",
                password: ""
            })
            navigate("/login")

        } catch (error) {
            console.log("Failed to Register User ", error.message);
            alert("Failed to Register User")
        }
    }

    return (
        <div className='bg-green-800 min-h-screen  flex  flex-col justify-center items-center   '>
            

            <form onSubmit={handleSubmit}  >
            <h1 className='text-center text-3xl bg-indigo-200 p-4   '>Regiseter Page</h1>

                <div className='bg-indigo-200  p-2 flex justify-center '>

                    <label className='m-2 p-2 w-50  bg-gray-600 rounded-md' >Enter your name</label>
                    <input type="text" name="name" placeholder='Enter your name...'
                        onChange={handleOnChange}
                        value={formData.name}
                        required
                        className='m-2 p-4 bg-gray-500 w-80  rounded-md'
                    />
                </div>
                <div className='bg-indigo-200  p-2 flex justify-center '>
                    <label className='m-2 p-2 bg-gray-600 w-50  rounded-md' >Enter your email</label>

                    <input type="email" name="email" placeholder='Enter your email...'
                        onChange={handleOnChange}
                        value={formData.email}
                        required
                        className='m-2 p-4 w-80  bg-gray-500 rounded-md'
                    />
                </div>
                <div className='bg-indigo-200 p-2 flex justify-center '>

                    <label className='m-2 w-50 p-2 bg-gray-600 rounded-md' >Enter your password</label>
                    <input type="password" name="password" placeholder='Enter your passowrd'
                        onChange={handleOnChange}
                        value={formData.password}
                        required
                        className='m-2 p-4 bg-gray-500 rounded-md w-80 '
                    />
                </div>

                <div className='bg-indigo-200 p-2   flex justify-center '>
                    <button type='submit' onClick={() => navigate("/login")}
                        className='w-50 h-15 bg-indigo-900 text-white p-2 rounded-md'
                    >Submit</button>
                </div>


            </form>
        </div>
    )
}

export default Register
