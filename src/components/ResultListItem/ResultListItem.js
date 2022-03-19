import { useState, useEffect } from "react";
import { Text, View } from "react-native";
import Container from "../Container/Container";
import { styles } from "./ResultListItemStyles";
import BusinessService from "../../api/business.service";

const ResultListItem = ({ route }) => {
  const { id } = route.params;
  const [results, setResults] = useState(null);

  const getDetail = async () => {
    const response = await BusinessService.get(id);
    setResults(response);
  };

  useEffect(() => {
    getDetail();
  }, [id]);

  return (
    <Container>
      <Text>{results.name}</Text>
      <Text>{results.location.address1}</Text>
      <Text>{results.location.state}</Text>
      <Text>{results.location.city}</Text>
    </Container>
  );
};

export default ResultListItem;
