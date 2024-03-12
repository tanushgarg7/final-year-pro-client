import React from "react";
import { NavLink, Link } from "react-router-dom";

const Header = () =>{

  return (
    <>
      <nav className="navbar navbar-expand-lg " style={{padding:0}} >
        <div className="container-fluid" style={{backgroundColor: "black",padding:'20px',margin:'0',}} >
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01" style={{margin:'0'}}>
            <Link to="/" className="navbar-brand" style={{color: "white", fontSize: "30px"}}>
              Gstone
            </Link>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0" > 
              {/* <SearchInput /> */}
              <li className="nav-item">
                <NavLink to="/" className="nav-link " style={{color: "white"}}>
                  Home
                </NavLink>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  // to={"/categories"}
                  data-bs-toggle="dropdown"
                  style={{color: "white"}}
                >
                  Categories
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to={"/categories"}>
                      All Categories
                    </Link>
                  </li>
                
                </ul>
              </li>
              

              
                <>
                      <li className="nav-item">
                        <NavLink to="/register" className="nav-link" style={{color: "white"}}>
                          Register
                        </NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink to="/login" className="nav-link" style={{color: "white"}}>
                          Login
                        </NavLink>
                      </li>
                </>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
};


export default Header;