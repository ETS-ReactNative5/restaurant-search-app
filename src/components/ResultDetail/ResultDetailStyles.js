import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  image: {
    marginVertical: 10,
    marginHorizontal: 8,
    width: 220,
    height: 140,
    borderRadius: 12,
  },
  name: {
    paddingTop: 4,
    paddingLeft: 8,
    fontSize: 18,
    fontWeight: "400",
  },
  icon: {
    paddingLeft: 8,
    fontSize: 18,
    color: "red",
  },
  subContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",
    alignItems: "center",
    flexBasis: 54,
    paddingRight: 8,
  },
  gridText: {
    paddingLeft: 6,
  },
});
