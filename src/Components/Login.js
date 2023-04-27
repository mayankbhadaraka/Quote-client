import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { SIGNIN_USER } from "../graphQl/mutation";
import { useMutation } from "@apollo/client";

const Login = () => {
  const nav = useNavigate();
  const [signInUser, { data, loading, error }] = useMutation(SIGNIN_USER, {
    // refetchQueries: [{ query: GET_PROFILE }],
    fetchPolicy:'no-cache'
  });
  
  const [user, setuser] = useState({});
  if (loading) return <h1>Loading</h1>;
  if (error) {
    console.log(error.message);
  }
  if (data) {
    sessionStorage.setItem("token", data.signInUser.token);
    setTimeout(() => {
      nav("/");
    }, 1000);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    signInUser({
      variables: {
        signInUser: user,
      },
    });
  };
  const handleChange = (e) => {
    setuser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <div className="container my-container">
      {error && <div className="red card-panel">{error.message}</div>}
      {data?.signInUser.token && (
        <div className="green card-panel">Login Successfull.</div>
      )}
      <h5>Login</h5>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="email"
          name="email"
          placeholder="email"
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          onChange={handleChange}
          required
        />
        <Link to="/signup">
          <p>Don't have account?</p>
        </Link>
        <button className="btn #512da8 deep-purple darken-2" type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
