import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { NavLink} from 'react-router-dom';
const Navbar = () => {
  return (
    <>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">hireAndseek:</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav me-left mb-6 mb-lg-0 ms-auto">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Discover</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">For job seekers</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">For companies</a>
        </li>
      
        <li className='nav-item'>
          <button type="button">Log In</button>
          <button type="button">Sign Up</button>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </>
  )
}

export default Navbar
