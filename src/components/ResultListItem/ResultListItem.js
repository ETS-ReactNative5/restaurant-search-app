import { useState, useEffect } from "react";
import { Text, View, FlatList, Image } from "react-native";
import Container from "../Container/Container";
import { styles } from "./ResultListItemStyles";
import BusinessService from "../../api/business.service";

const ResultListItem = ({ route }) => {
  const { id } = route.params;
  const [results, setResults] = useState([]);

  const getDetail = async () => {
    const response = await BusinessService.get(id);
    setResults(response);
  };
  console.log(results);

  useEffect(() => {
    getDetail();
  }, [id]);

  return (
    <Container>
      <Text>{results.name}</Text>
      <Text>{results.phone}</Text>
      <FlatList
        keyExtractor={(result) => result.photos}
        data={results.photos}
        renderItem={({ item }) => {
          return <Image Source={{ uri: item }} style={styles.img} />;
        }}
      />
    </Container>
  );
};

export default ResultListItem;
