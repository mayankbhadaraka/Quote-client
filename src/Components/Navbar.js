import { useApolloClient } from "@apollo/client";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
// import {logo} from '../../public/Quote.png'

const Navbar = () => {
  const token = sessionStorage.getItem("token");
  const nav = useNavigate();
  const client = useApolloClient();

  const resetStore = () => {
    sessionStorage.removeItem("token");
    client.resetStore().then(() => {
      nav("/login");
    });
  };

  return (
    <nav>
      <div className="nav-wrapper #512da8 deep-purple">
        <div className="logo">
          <Link to="/" className="left">
            <img
              className="circle"
              style={{ border: "2px solid", "width":"64px","height":"64px","marginInlineEnd":"20px" }}
              src="Quote.png"
              alt="logo"
            />
            {/* <img src="Quote.png" alt="" srcset="" /> */}
          </Link>
          <h3 style={{"margin":"0"}}>Daily Motivation</h3>
        </div>
        <ul id="nav-mobile" style={{"line-height": "1px"}} className="right hide-on-med-and-down">
          <li>
            <Link to="/">Home</Link>
          </li>
          {!token ? (
            <>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/signup">Signup</Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="/profile">Profile</Link>
              </li>
              <li>
                <Link to="/create">Create</Link>
              </li>
              <li>
                <button className="red btn" onClick={resetStore}>
                  Logout
                </button>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
