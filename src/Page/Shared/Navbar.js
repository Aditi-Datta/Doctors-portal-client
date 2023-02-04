import { signOut } from 'firebase/auth';
import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

function Navbar() {


  const [user, loading, error] = useAuthState(auth);

  const logout = () => {
    signOut(auth);
  };

  const menuItems =
    <>
      <li><Link to="/home" className="bg-gradient-to-r from-indigo-20 to-cyan-40 hover:from-indigo-200 hover:to-cyan-400">Home</Link></li>
      <li><Link to="/appointment" className="bg-gradient-to-r from-green-0 to-blue-0 hover:from-indigo-200 hover:to-cyan-400">Appointment</Link></li>
      <li><Link to="/review" className="bg-gradient-to-r from-green-0 to-blue-0 hover:from-indigo-200 hover:to-cyan-400">Reviews</Link></li>
      <li><Link to="/about" className="bg-gradient-to-r from-green-0 to-blue-0 hover:from-indigo-200 hover:to-cyan-400">About</Link></li>
      <li><Link to="/contact" className="bg-gradient-to-r from-green-0 to-blue-0 hover:from-indigo-200 hover:to-cyan-400">Contact</Link></li>
      
      <li> {user ? <button className='btn btn-ghost' onClick={logout} >SignOut</button> : <Link to="/login" className="bg-gradient-to-r from-green-0 to-blue-0 hover:from-indigo-200 hover:to-cyan-400">Login</Link>} </li>
    </>

  return (

    <div className="px-12">
      <div className="navbar bg-base-100 " >
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex="0" className="btn btn-ghost lg:hidden ">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 ">
              {menuItems}
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">Doctors Portal</a>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal p-0   ">
            {menuItems}
          </ul>
        </div>
       
      </div>
    </div>
  )
}

export default Navbar;