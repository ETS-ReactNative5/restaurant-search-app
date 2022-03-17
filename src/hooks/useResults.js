import { useEffect, useState } from "react";
import BusinessService from "../api/business.service";

export default () => {
  const [results, setResults] = useState([]);

  const searchHandler = async (term) => {
    const data = await BusinessService.get(term, "san jose");
    return setResults(data);
  };

  return [searchHandler, results];
};
