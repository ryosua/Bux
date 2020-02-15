import React from "react";
import { useQuery } from "@apollo/react-hooks";

import GET_BOOKS from "./Query";

const GraphQLTest = () => {
  const { loading, error, data } = useQuery(GET_BOOKS);

  if (loading) {
    return "loading...";
  }

  if (error) {
    return "error";
  }

  return `data: ${JSON.stringify(data)}`;
};

export default GraphQLTest;
