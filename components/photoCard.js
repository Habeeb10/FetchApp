import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Forward } from "../assets/svg";

export const PhotoCard = ({ imageSource, title, onPress }) => {
  return (
    <TouchableOpacity style={styles.cont} onPress={onPress}>
      <View style={styles.tinyLogo}>
        <Image
          style={{ width: "100%" }}
          source={{
            uri: imageSource,
          }}
          resizeMode="contain"
        />
      </View>
      <Text>{title}</Text>
      <Forward />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  tinyLogo: {
    height: 50,
    width: 50,
    backgroundColor: "white",
  },
  cont: {
    backgroundColor: "grey",
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 50,
    borderRadius: 10,
    padding: 10,
  },
});
