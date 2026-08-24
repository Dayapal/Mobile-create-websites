import axios  from '../api/axios'
import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const CreateMobile = () => {
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        name: "",
        color: "",
        price: "",
        ram: "",
        companyName: "",
        camera: "",
    })
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const mobileData = {
                ...formData,
                price: Number(formData.price)
            }
            await axios.post("http://localhost:3000/mobile", mobileData);

            console.log("Mobile created successfully")
            alert("Mobile created successfully")
            setFormData({
                name: "",
                color: "",
                price: "",
                ram: "",
                companyName: "",
                camera: "",
            })
            location.reload();
        } catch (error) {
            console.log("Failed to create Mobile ", error.message)
            alert("Failed to create mobile")
        }

    }

    return (
        <div className=' bg-gray-400 text-white p-10 min-h-screen  flex justify-center items-center flex-col'>
            <h1 className='text-center text-2xl w-100 bg-slate-700 p-2 rounded-md text-white' >Create your mobile</h1>

            <form onSubmit={handleSubmit} >
                <div>
                    <input type="text" name="name" placeholder='name'
                        onChange={handleChange}
                        value={formData.name}
                        className='bg-slate-600 p-2 w-70 rounded-md m-2 text-1.5xl '
                    />
                </div>

                <div>
                    <input type="number" name="price" placeholder='price'
                        onChange={handleChange}
                        value={formData.price}
                        className='bg-slate-600 p-2 w-70 rounded-md m-2 text-1.5xl'
                    />
                </div>

                <div>
                    <input type="text" name="color" placeholder='color'
                        onChange={handleChange}
                        value={formData.color}
                        className='bg-slate-600 p-2 w-70 rounded-md m-2 text-1.5xl '
                    />
                </div>

                <div>
                    <input type="text" name="ram" placeholder='ram'
                        onChange={handleChange}
                        value={formData.ram}
                        className='bg-slate-600 p-2 w-70 rounded-md m-2 text-1.5xl'
                    />
                </div>


                <div>
                    <input type="text" name="camera" placeholder='camera'
                        onChange={handleChange}
                        value={formData.camera}
                        className='bg-slate-600 p-2 w-70 rounded-md m-2 text-1.5xl '
                    />
                </div>

                <div>
                    <input type="text" name="companyName" placeholder='companyName'
                        onChange={handleChange}
                        value={formData.companyName}
                        className='bg-slate-600 p-2 w-70 rounded-md m-2 text-1.5xl'
                    />
                </div>
                <div > 
                    <button
                    onClick={() => navigate("/mobiles")}
                    type='submit' className='bg-indigo-600 px-6  ml-20 rounded-md py-4 w-40 text-white'
                    >Submit</button>
                </div>

            </form>

        </div>
    )
}

export default CreateMobile
