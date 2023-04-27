import { gql } from "@apollo/client"



export const GET_ALL_QUOTES=gql`
query getAllQuotes{
    quotes{
      name
      by{
        _id
        firstName
      }
    }
  }
`

export const GET_PROFILE=gql`
query getUser{
  myProfile{
    firstName
    lastName
    email
    quotes{
      _id
      name
    }
  }
}
`
export const GET_USER_ID=gql`
query userById($_id:ID!){
  user(_id:$_id){
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
}`