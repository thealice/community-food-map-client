import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <ul className="flex border-b uppercase">
      <li className="-mb-px mr-1">
        <NavLink className="bg-transparent inline-block border-l border-t border-r rounded-t py-2 px-4 hover:text-purple-400 font-semibold" to="/">Community Food Map</NavLink>
      </li>
      <li className="mr-1">
        <NavLink className="bg-transparent active:border-l active:border-t active:border-r inline-block py-2 px-4 hover:text-purple-400 font-semibold" to="/about">About</NavLink>
      </li>
      <li className="mr-1">
        <NavLink className="bg-transparent active:border-l active:border-t active:border-r inline-block py-2 px-4 hover:text-purple-400 font-semibold" to="/locations/new">Share some food</NavLink>
      </li>
    </ul>
  )
}

export default NavBar;