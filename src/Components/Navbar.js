import { useApolloClient } from "@apollo/client";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const token = sessionStorage.getItem("token");
  const nav=useNavigate()
  const client = useApolloClient()

  const resetStore=()=>{
    sessionStorage.removeItem("token")
    client.resetStore().then(() => {
      nav("/login")
  })
  }


  return (
    <nav>
      <div className="nav-wrapper #512da8 deep-purple">
        <Link to="/" className="brand-logo left">
          Quotes App
        </Link>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          {!token ? 
            <>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/signup">Signup</Link>
              </li>
            </>
           : 
            <>
              <li>
                <Link to="/profile">Profile</Link>
              </li>
              <li>
                <Link to="/create">Create</Link>
              </li>
              <li>
                <button
                  className="red btn"
                  onClick={resetStore}
                >
                  Logout
                </button>
              </li>
            </>
          }
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
