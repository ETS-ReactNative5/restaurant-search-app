import { View, Text, Image } from "react-native";
import { styles } from "./ResultDetailStyles";
import { Feather } from "@expo/vector-icons";
import Card from "../Card/Card";

const ResultDetail = ({ result }) => {
  return (
    <Card style={styles.container}>
      <View>
        <Image style={styles.image} source={{ uri: result.image_url }} />
      </View>
      <Text style={styles.name}>{result.name}</Text>
      <View style={styles.subContainer}>
        <Feather name='star' style={styles.icon} />
        <Text style={styles.gridText}>{result.rating}</Text>
        <Feather name='eye' style={styles.icon} />
        <Text style={styles.gridText}>{result.review_count}</Text>
      </View>
    </Card>
  );
};

export default ResultDetail;
