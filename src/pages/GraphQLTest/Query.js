import { gql } from "apollo-boost";

const GET_BOOKS = gql`
  query GetBooks {
    books {
      title
    }
  }
`;

export default GET_BOOKS;
