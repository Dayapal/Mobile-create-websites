import axios from 'axios'
import React, { lazy, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'


const Login = () => {

    const [formData, setFomrData] = useState({
        email: "",
        password: ""
    })

    const handleChange = (e) => {
        setFomrData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }
    const navigate = useNavigate()
    const handleLogin = async (e) => {
        e.preventDefault()
        try {
            const res = await axios.post("https://mobile-create-websites-mobiles.onrender.com/login", formData)
            console.log(res.data)
            const token = res.data.token;
            localStorage.setItem("token", token)
            localStorage.setItem("User", JSON.stringify(res.data.data))
            console.log("User Login successfully");
            alert("User Login successfully")
            console.log(token)
            setFomrData({
                email: "",
                password: ""
            })
            navigate("/dashboard")

        } catch (error) {
            console.log("Failed to Login ", error.message)
            alert("Failed to login")

        }
    }

    return (
        <div className='bg-green-00 min-h-screen flex flex-col text-center justify-center
        items-center
        p-8   '>
            <div className='p-8 rounded-md  bg-green-400'>
                <h1 className='text-center text-2xl m-4'>Login Page</h1>
                <form onSubmit={handleLogin}>
                    <div className='flex m-5 p-2 bg-indigo-700  rounded-md'>
                        <label className='bg-gray-400 m-2 p-2' htmlFor="">Enter your email</label>

                        <input className='bg-orange-300 m-2  p-2'
                            type="text" name="email"
                            placeholder='Enter email'
                            onChange={handleChange}
                            value={formData.email}
                            required
                        />

                    </div>
                    <div className='flex m-5 p-2 bg-indigo-700  rounded-md '>
                        <label className='bg-gray-400 m-2 p-2' htmlFor="">Enter your password</label>
                        <input className='bg-orange-300 m-2  p-2' type="password"
                            placeholder='Enter password'
                            name="password"
                            onChange={handleChange}
                            value={formData.password}
                            required
                        />
                    </div>
                    <button type='submit'
                        className='bg-indigo-700 w-50 h-15 rounded-md text-white m-2 p-2'
                    >Login</button>
                </form>

                <p className='text-center mt-5 text-slate-900 font-extrabold m-2 '>
                    Dont' have an Account? {" "}
                    <Link to="/register"
                        className='text-orange-800 font-extrabold block m-2'
                    >
                        Register
                    </Link>
                </p>
            </div>

        </div>
    )
}

export default Login
