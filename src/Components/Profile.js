import { useMutation, useQuery } from "@apollo/client";
import React from "react";
import { GET_ALL_QUOTES, GET_PROFILE } from "../graphQl/query";
import { DELETE_QUOTE } from "../graphQl/mutation";

const Profile = () => {
  const { loading, error, data } = useQuery(GET_PROFILE,{
    context: {
          headers: {
            authorization:sessionStorage.getItem('token')||"",
          },
        },
        fetchPolicy:'no-cache'
  });

  const [deleteQuoteMutation] = useMutation(DELETE_QUOTE, {
    context: {
      headers: {
        authorization: sessionStorage.getItem('token'),
      },
    },
    refetchQueries: [GET_ALL_QUOTES, "getAllQuotes", GET_PROFILE, "getUser"],
  });

  const DeleteQuote = (id) => {
    deleteQuoteMutation({ variables: { _id: id } });
  };

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
          src={`https://robohash.org/${data.myProfile.firstName}.png?size=200x200`}
          alt="pic"
        />
        <h5>
          {data.myProfile.firstName} {data.myProfile.lastName}
        </h5>
        <h6>Email:{data.myProfile.email}</h6>
      </div>
      <h3>Your quotes</h3>
      {data.myProfile.quotes.map((item) => {
        return (
          <blockquote style={{"display":"flex","justify-content": "space-between"}}>
            <h6>{item.name}</h6>
            <button type="submit" className="red btn" onClick={() => DeleteQuote(item._id)}>
              Delete
            </button>
          </blockquote>
        );
      })}
    </div>
  );
};

export default Profile;
