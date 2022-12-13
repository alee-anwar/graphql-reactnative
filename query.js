import { gql } from "@apollo/client";

export const COUNTRY_QUERY = gql`
  query CountryQuery{
    countries{
      name
    }
  }
`

export const Task_2 = gql`
    query {
        countries(filter:{code: {eq: "BR"}}){
        name
        }
    }
` 


export const Task_3 = gql`
query CountryQuery {
  countries(filter:{code: {eq: "AR"}}) {
      code
      name
      native
    }
  }
`

