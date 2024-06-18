import React from 'react';
import {Link} from 'react-router-dom';


const Navbar = () => {
  return (
    <nav className='border-2 border-black p-2 m-3 rounded-lg min-w-[930px] flex justify-evenly'>
        <Link to="/">Home</Link>
        <Link to="/test">Test</Link>
    </nav>
  )
}

export default Navbar;
