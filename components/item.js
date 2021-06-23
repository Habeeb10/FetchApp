import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { Forward } from "../assets/svg";

export const ItemCard = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={styles.cont} onPress={onPress}>
      <Text style={{ width: "75%" }}>{title}</Text>
      <Forward />
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  cont: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#FA4A0C",
    marginBottom: 20,
    width: "100%",
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: "center",
    paddingHorizontal: 10,
  },
});
