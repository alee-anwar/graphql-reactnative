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
        country(code: "BR" ){
        name
        }
    }
` 


export const Task_3 = gql`
    query Task3Query{
        country(code: "BR") {
        name
        currency        
    }
  }
`