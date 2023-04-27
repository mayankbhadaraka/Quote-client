import { useQuery } from "@apollo/client";
import React from "react";
import {Link} from 'react-router-dom'
import { GET_ALL_QUOTES } from "../graphQl/query";

const Home = () => {
  const { loading, error, data } = useQuery(GET_ALL_QUOTES);
  if (loading) return <h1>Loading</h1>;
  if (error) {
    console.log(error.message);
  }
  if(data.quotes.length==0){
    return <h2>No Quotes Available</h2>
  }

  return (
    <div className="container my-container">
      {data.quotes.map((quote,i) => {
        return (
          <blockquote key={i}>
            <h6>{quote.name}</h6>
            <Link to={`/profile/${quote.by._id}`}><p className="right-align">~{quote.by.firstName}</p></Link>
          </blockquote>
        );
      })}
    </div>
  );
};

export default Home;
