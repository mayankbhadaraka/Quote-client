import { useQuery } from "@apollo/client";
import React from "react";
import { GET_USER_ID } from "../graphQl/query";
import { useParams } from "react-router-dom";
import NotFound from "./NotFound";

const OtherProfile = () => {
  const userid = useParams();
  const { loading, error, data } = useQuery(GET_USER_ID, {
    fetchPolicy: "no-cache",
    variables:{
        _id:userid.userid
    }
  });
  if(data==null){
    return <NotFound/>
  }
  if (loading) return <h1>Profile is Loading</h1>;
  if (error) {
    console.log(error.message);
  }
  return (
    <div className="container my-container">
      <div className="center-align">
        <img
          className="circle"
          style={{ border: "2px solid", marginTop: "10px" }}
          src={`https://robohash.org/${data.user.firstName}.png?size=200x200`}
          alt="pic"
        />
        <h5>
          {data.user.firstName} {data.user.lastName}
        </h5>
        <h6>Email:{data.user.email}</h6>
      </div>
      <h3>Your quotes</h3>
      {data.user.quotes.map((item) => {
        return (
          <blockquote
            style={{ display: "flex", "justify-content": "space-between" }}
          >
            <h6>{item.name}</h6>
          </blockquote>
        );
      })}
    </div>
  );
};

export default OtherProfile;
