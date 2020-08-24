import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    // <div className="navbar flex flex-row text-purple-100">
    //     <NavLink to="/">Home</NavLink>
    //     <NavLink to="/about">About</NavLink>
    //     <NavLink to="/locations/new">Add New Location</NavLink>
    // </div>
    <ul className="flex border-b uppercase">
      <li className="-mb-px mr-1">
        <NavLink className="bg-transparent inline-block border-l border-t border-r rounded-t py-2 px-4 hover:text-purple-400 font-semibold" to="/">Home</NavLink>
      </li>
      <li className="mr-1">
        <NavLink className="bg-transparent active:border-l active:border-t active:border-r inline-block py-2 px-4 hover:text-purple-400 font-semibold" to="/about">About</NavLink>
      </li>
      <li className="mr-1">
        <NavLink className="bg-transparent active:border-l active:border-t active:border-r inline-block py-2 px-4 hover:text-purple-400 font-semibold" to="/locations/new">Add New Location</NavLink>
      </li>
    </ul>
  )
}

export default NavBar;