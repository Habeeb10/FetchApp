import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

export const CustomInput = ({ label, value, onChangeText }) => {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.container}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 5,
    borderColor: "grey",
    borderWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  label: {
    fontSize: 15,
    fontWeight: "bold",
    marginTop: 50,
    marginBottom: 5,
  },
});
