import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { CustomInput } from "../components/customInput";

export default function Input() {
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState(null);
  const [loading, setLoading] = useState(false);

  const send = () => {
    const data = {
      title: email,
      body: number,
      userId: 1,
    };
    setLoading(true);
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json))
      .finally(setLoading(false));
  };

  return (
    <View style={styles.container}>
      <StatusBar style={"dark"} />
      <CustomInput
        label="email address"
        onChangeText={(text) => setEmail(text)}
        value={email}
      />
      <CustomInput
        label="phone number"
        onChangeText={setNumber}
        value={number}
      />
      <TouchableOpacity
        style={styles.touch}
        activeOpacity={0.8}
        onPress={() => send()}
      >
        <Text style={styles.done}>{"Done"}</Text>
      </TouchableOpacity>
      {loading && <ActivityIndicator color="red" size="large" />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    paddingTop: 25,
  },
  touch: {
    width: "100%",
    paddingVertical: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "green",
    borderRadius: 10,
    marginTop: 200,
  },
  done: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});
