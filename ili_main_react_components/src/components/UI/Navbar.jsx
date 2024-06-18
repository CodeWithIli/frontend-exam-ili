import React from 'react';
import {Link} from 'react-router-dom';


const Navbar = () => {
  return (
    <nav className='border-2 border-black p-2 m-3 rounded-lg min-w-[930px] flex justify-evenly'>
        <Link to="/">Welcome</Link>
        <Link to="/home/home-page-1">Home 1</Link>
        <Link to="/home/home-page-2">Home 2</Link>
        <Link to="/test/test-page">Test</Link>
    </nav>
  )
}

export default Navbar;
