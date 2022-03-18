import { View } from "react-native";
import { styles } from "./CardStyles";
const Card = ({ children }) => {
  return <View style={styles.container}>{children}</View>;
};

export default Card;
