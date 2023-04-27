import { gql } from "@apollo/client";


export const SIGNUP_USER=gql`
mutation signup($user:userInput!){
    signUpUser(userNew:$user){
      _id
      firstName
      lastName
      email
      password
      quotes{
        name
        by
      }
    }
  }
`
export const SIGNIN_USER=gql`
mutation login($signInUser:userLogin!){
    signInUser(signInUser:$signInUser){
              token
    }
  }
` 

export const CREATE_QUOTE=gql`
mutation createQuote($quote:String!){
    createQuote(name:$quote)
}`

export const DELETE_QUOTE=gql`
mutation($_id:String!){
  deleteQuote(_id:$_id)
}`
