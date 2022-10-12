import React from 'react'
import {Link, Outlet} from "react-router-dom";
const LayoutPage = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
  <a className="navbar-brand" href="#">Course Management</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <Link className="nav-link" to="/">Home</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/List">List</Link>
        
      </li>
      <li className="nav-item dropdown">
        <Link className="nav-link" to="/Add">Add</Link>
      </li>
    </ul>
  </div>
</nav>
<Outlet></Outlet>
    </div>
  )
}

export default LayoutPage;