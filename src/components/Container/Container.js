import { View } from "react-native";
import { styles } from "./ContainerStyles";

const Container = ({ children }) => {
  return <View style={styles.container}>{children}</View>;
};

export default Container;
