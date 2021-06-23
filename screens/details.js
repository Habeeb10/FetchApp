import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Details({ navigation, route }) {
  const { title, body } = route.params;
  const { body, title } = details;
  return (
    <View style={styles.container}>
      <StatusBar />
      <Text style={styles.title}>{title}</Text>
      <View style={styles.content}>
        <Text>{body}</Text>
      </View>
      <TouchableOpacity
        style={styles.touch}
        onPress={() => navigation.navigate("photos")}
        activeOpacity={0.8}
      >
        <Text style={styles.done}>Done</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    backgroundColor: "orange",
    borderRadius: 8,
    marginBottom: 150,
    padding: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 150,
    marginTop: 50,
  },
  touch: {
    width: "100%",
    paddingVertical: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "green",
    borderRadius: 10,
  },
  done: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  container: {
    flex: 1,
    paddingHorizontal: 15,
    paddingTop: 25,
  },
});
