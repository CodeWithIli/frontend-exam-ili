import React from 'react'
import Navbar from '../../components/UI/Navbar';

const WelcomePage = () => {
  return (
    <main className='grid justify-center'>
        <Navbar/>
        <h1 className='border-4 border-green-600 p-10 bg-green-500 text-4xl '>Welcome to my application!</h1>
    </main>
  )
}

export default WelcomePage;