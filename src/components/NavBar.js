import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="navbar flex flex-row text-purple-100">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/locations/new">Add New Location</NavLink>
    </div>
  )
}

export default NavBar;