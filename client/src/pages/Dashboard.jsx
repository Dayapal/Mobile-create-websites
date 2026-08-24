import React from 'react'
import MobileFetch from '../components/MobileFetch'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {
  const navigate = useNavigate()
  const user = JSON.parse(localStorage.getItem("User"))
  console.log(user)
  console.log(user.name)

  const logOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("User")
    navigate("/login")
  }



  return (
    <div className='min-h-screen bg-slate-400'>

      <nav className='bg-white shadow px-6 py-4 flex justify-between items-center'>
        <h1
          className='text-2xl font-bold text-indigo-700'
        >Mobile App</h1>
        <div className='flex items-center gap-4'>
          <span>
            Welcome , {user?.name}
          </span>
          <button onClick={logOut}
            className='bg-red-700 text-white px-4 py-2 rounded-lg '
          >
            Logout
          </button>

          
          <button 
          onClick={() => navigate("/create-mobile")}
          className='bg-blue-600  text-white px-4 py-2 rounded-lg'
          >
            Create Mobile
          </button>
        </div>
      </nav>

       <MobileFetch/>
    </div>
  )
}

export default Dashboard
