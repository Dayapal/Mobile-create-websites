// import axios from 'axios';
import axios from '../api/axios';
import React, { use } from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

const MobileFetch = () => {
    const [mobile, setMobile] = useState([]);
    const [editId, setEditId] = useState(null);

    const [form, setForm] = useState({
        name: "",
        color: "",
        price: "",
        ram: "",
        companyName: "",
        camera: "",
    })


    const fetchMobile = async () => {
        try {
            const res = await axios.get("https://mobile-create-websites-mobiles.onrender.com/mobiles");
            console.log("mobile here ", res.data.data)
            setMobile(res.data.data)
        } catch (error) {
            console.log("Failed to fetch Mobile ", error.message)
        }
    }


    const deleteMobile = async (id) => {
        try {
            await axios.delete(`https://mobile-create-websites-mobiles.onrender.com/${id}`)
            setMobile((prev) => prev.filter((item) => item._id !== id))
            console.log("Mobile deleted successfully")
            alert("Delete Mobile Successfully")
            location.reload();

        } catch (error) {
            console.log("Failed to delete Mobile");
            alert("Failed to delete  mobile")


        }
    }

    const handleEdit = (item) => {
        setEditId(item._id)
        setForm({
            name: item.name || "",
            price: item.price || "",
            color: item.color || "",
            ram: item.ram || "",
            companyName: item.companyName || "",
            camera: item.camera || ""
        })
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({
            ...prev,
            [name]: value
        }))

    }


    const updateMobile = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.put(`https://mobile-create-websites-mobiles.onrender.com/${editId}`, form);

            setMobile((prev) =>
                prev.map((item) => item._id === editId ? { ...item, ...form, } : item)
            )

            alert("Mobile update successfully")

            setEditId(null)

            setForm({
                name: "",
                color: "",
                price: "",
                ram: "",
                companyName: "",
                camera: "",

            })
            location.reload()


        } catch (error) {
            console.log("Failed to update Mobile ", error)
            alert("Failed to update mobile")

        }
    }

    const cancelUpdate = () => {
        setEditId(null)
        setForm({
            name: "",
            color: "",
            price: "",
            ram: "",
            companyName: "",
            camera: "",

        })
    }



    useEffect(() => {
        fetchMobile()

    }, [])

    return (
        <div>
            <h1 className='text-center text-2xl bg-slate-400 p-3  '>All Mobiles here</h1>



            {editId && (
                <div className='bg-gray-200 p-6 m-5 rounded-md shadow-md'>
                    <h2 className='text-2xl font-bold text-center mb-5'>Update Mobile</h2>
                    <form onSubmit={updateMobile}
                        className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'
                    >

                        <input type="text"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            placeholder='Mobile Name'
                            className='border p-4 rounded-md'

                        />
                        <input type="number"
                            name="price"
                            value={form.price}
                            onChange={handleChange}
                            placeholder='Price'
                            className='border p-4 rounded-md'

                        />
                        <input type="text"
                            name="color"
                            value={form.color}
                            onChange={handleChange}
                            placeholder='RAM'
                            className='border p-4 rounded-md'

                        />
                        <input type="text"
                            name="ram"
                            value={form.ram}
                            onChange={handleChange}
                            placeholder='Mobile Name'
                            className='border p-4 rounded-md'

                        />
                        <input type="text"
                            name="companyName"
                            value={form.companyName}
                            onChange={handleChange}
                            placeholder='CompanyName'
                            className='border p-4 rounded-md'

                        />
                        <input type="text"
                            name="camera"
                            value={form.camera}
                            onChange={handleChange}
                            placeholder='Camera'
                            className='border p-4 rounded-md'
                        />


                        <div className='md:col-span-2 flex justify-center gap-5'>
                            <button type="submit"
                                className='bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-900'
                            >
                                Update Mobile
                            </button>

                            <button type='button'
                                onClick={cancelUpdate}
                                className='bg-gray-500 text-white px-6 py-3 rounded-md hover:bg-gray-900'
                            >
                                Cancel
                            </button>
                        </div>

                    </form>
                </div>
            )}

            {mobile.length === 0 ?
                (<h1 className='text-center text-2xl bg-pink-700 p-5 '>
                    Mobile not Fetch Yet
                </h1>) : (
                    <div className='grid grid-cols-1  md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-4  p-2 m-2 gap-4 rounded-md '>
                        {mobile.map((item, index) => (
                            <div key={item._id}
                                className=' bg-gray-200 p-4 m-5 rounded-md '
                            >
                                <div className='flex justify-between'>
                                    <h1 className='text-indigo-600 font-bold' >Name:</h1>
                                    <h1 className='font-extrabold'>{item.name}</h1>
                                </div>
                                <div className='flex justify-between'>
                                    <h1 className='text-indigo-600 font-bold' >Price:</h1>
                                    <h1 className='font-extrabold'>{item.price}</h1>
                                </div>
                                
                                <div className='flex justify-between'>
                                    <h1 className='text-indigo-600 font-bold' >Color:</h1>
                                    <h1 className='font-extrabold'>{item.color}</h1>
                                </div>
                                <div className='flex justify-between'>
                                    <h1 className='text-indigo-600 font-bold' >RAM:</h1>
                                    <h1 className='font-extrabold'>{item.ram}</h1>
                                </div>
                                <div className='flex justify-between'>
                                    <h1 className='text-indigo-600 font-bold' >CompanyName:</h1>
                                    <h1 className='font-extrabold'>{item.companyName}</h1>
                                </div>
                                <div className='flex justify-between'>
                                    <h1 className='text-indigo-600 font-bold' >Camera:</h1>
                                    <h1 className='font-extrabold'>{item.camera}</h1>
                                </div>

                                <div className='flex justify-between'>
                                    <button onClick={() => deleteMobile(item._id)}
                                        className='bg-red-600 text-white p-2 text-sm m-1 w-25 rounded-md hover:bg-red-900'>
                                        Delete</button >
                                    <button
                                        className='bg-green-600 text-white p-2 text-sm m-1 w-25 rounded-md hover:bg-green-900'
                                        onClick={() => handleEdit(item)}
                                    > Update</button >
                                </div>

                            </div>
                        ))}
                    </div>
                )}
        </div>
    )
}

export default MobileFetch
