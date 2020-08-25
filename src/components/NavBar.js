import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <header>
      <div className="flex items-center justify-between px-4 py-2">
        <div>
          <NavLink className="bg-transparent inline-block py-2 px-4 hover:text-purple-400 font-semibold uppercase" to="/">Community Food Map</NavLink>
        </div>
        <div>
          <button type="button" class="block text-gray-500 hover:text-white focus:text-white focus:outline-none">
            <svg class="h-6 w-6 fill-current" viewBox="0 0 24 24">
              <path fill-rule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"/>
            </svg>
          </button>
        </div>
      </div>

      {/* <div>
        <NavLink className="bg-transparent block py-2 px-4 hover:text-purple-400 font-semibold" to="/about">About</NavLink>
        <NavLink className="bg-transparent block py-2 px-4 hover:text-purple-400 font-semibold" to="/locations/new">Share some food</NavLink>
      </div> */}

  </header>

  )
}

export default NavBar;

