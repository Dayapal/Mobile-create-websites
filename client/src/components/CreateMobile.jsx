import axios from '../api/axios'
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
    const [image, setImage] = useState(null)

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const data = new FormData();
            Object.keys(formData).forEach((key) => {
                data.append(key, formData[key])
            })
            data.append("image", image)
            await axios.post("https://mobile-create-websites-mobiles.onrender.com/mobile", data);
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
            setImage(null)
            e.target.reset();
            location.reload();
        } catch (error) {
            console.log("Failed to create Mobile ", error.message)
            alert("Failed to create mobile")
        }

    }

    return (
        <div className='flex min-h-screen items-center justify-center bg-indigo-300 p-6'>
            <div className='w-full max-w-xl rounded-lg bg-white p-6 shadow'>
                <h1 className='mb-6 text-center text-2xl font-bold' >Create your mobile</h1>

                <form onSubmit={handleSubmit} className='space-y-4'>

                    <input type="text" name="name" placeholder='name'
                        onChange={handleChange}
                        value={formData.name}
                        className='w-full rounded-md border p-3'
                    />



                    <input type="number" name="price" placeholder='price'
                        onChange={handleChange}
                        value={formData.price}
                        className='w-full rounded-md border p-3'
                    />



                    <input type="text" name="color" placeholder='color'
                        onChange={handleChange}
                        value={formData.color}
                        className='w-full rounded-md border p-3'
                    />


                    <input type="text" name="ram" placeholder='ram'
                        onChange={handleChange}
                        value={formData.ram}
                        className='w-full rounded-md border p-3'
                    />



                    <input type="text" name="camera" placeholder='camera'
                        onChange={handleChange}
                        value={formData.camera}
                        className='w-full rounded-md border p-3'
                    />
                    <input type="text" name="companyName" placeholder='companyName'
                        onChange={handleChange}
                        value={formData.companyName}
                        className='w-full rounded-md border p-3'
                    />
                    <input
                        type="file"
                        accept='image/*'
                        onChange={(e) => setImage(e.target.files[0])}
                        className='w-full rounded-md border p-3'
                    />

                    <button
                        onClick={() => navigate("/mobiles")}
                        type='submit' className=' w-full  bg-indigo-600 rounded-md py-3 font-semibold  text-white'
                    >Submit</button>


                </form>

            </div>

        </div>
    )
}

export default CreateMobile
