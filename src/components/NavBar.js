import React from 'react';
import { NavLink } from 'react-router-dom';
import { Component } from 'react';

class NavBar extends Component {

  state = {
    isOpen: false
  }

  toggleMenu = (e) => {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  render() {
    return (
      <header>
          <div className="flex items-center justify-between px-4 py-2">
            <div>
              <NavLink className="bg-transparent inline-block py-2 px-4 hover:text-purple-400 font-semibold uppercase" to="/">Community Food Map</NavLink>
            </div>
            <div>
              <button onClick={this.toggleMenu} type="button" class="block text-gray-500 hover:text-white focus:text-white focus:outline-none">
                <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                  { this.state.isOpen &&
                      <path fill-rule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"/>
                  }
                  { !this.state.isOpen &&
                      <path v-if="!isOpen" fill-rule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"/>
                  } 
                </svg>
              </button>
            </div>
          </div>
          {this.state.isOpen &&
            <div className="">
              <NavLink className="block px-2 py-1 text-white font-semibold rounded hover:bg-gray-800 content-end text-right pr-5" to="/about">About</NavLink>
              <NavLink className="block px-2 py-1 text-white font-semibold rounded hover:bg-gray-800 content-end text-right pr-5" to="/locations/new">Share some food</NavLink>
            </div>
          }

      </header>
    )
  }

}

export default NavBar;

