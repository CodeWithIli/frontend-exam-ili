import React from 'react'
import Header from '../components/Header'
import PhotoFunc from '../components/PhotoFunc'

export default function DefaultLayout() {
  return (
    <main className='grid justify-center'>
        <Header/>
        <PhotoFunc/>
    </main>
  )
}
