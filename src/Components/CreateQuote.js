import React, { useState } from "react";
import { CREATE_QUOTE } from "../graphQl/mutation";
import { useMutation } from "@apollo/client";
import { GET_ALL_QUOTES, GET_PROFILE } from "../graphQl/query";

const CreateQuote = () => {
  const [quote, setQuote] = useState("");
  const [createQuote, { data, loading, error }] = useMutation(CREATE_QUOTE, {
    context: {
      headers: {
        authorization: sessionStorage.getItem("token") || "",
      },
    },
    refetchQueries: [GET_ALL_QUOTES, "getAllQuotes", GET_PROFILE, "getUser"],
  });
  if (loading) return <h1>Loading</h1>;
  if (error) {
    console.log(error.message);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    createQuote({
      variables: {
        quote: quote,
      },
    });
  };
  return (
    <div className="container my-container">
      {error && <div className="red card-panel">{error.message}</div>}
      {data?.createQuote && (
        <div className="green card-panel">Quote created successfull.</div>
      )}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="Quote"
          placeholder="Write Your Quote here"
          onChange={(e) => {
            setQuote(e.target.value);
          }}
          required
        />
        <button className="btn green" type="submit">
          Create
        </button>
      </form>
    </div>
  );
};

export default CreateQuote;
