import React from 'react'

const NavBar = () => {
  return (
    <div className="nav-bar">
        <strong>About | </strong>
        if logged in:
            <strong> Greeting, Logout, My Foodsources | </strong>
        if logged out:
            <strong> Login/SignUp</strong>
        <strong> | Add New FoodSource</strong>
    </div>
  )
}

export default NavBar