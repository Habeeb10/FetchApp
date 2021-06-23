import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ActivityIndicator,
} from "react-native";
import { ItemCard } from "../components/item";

export default function Home({ navigation }) {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    setLoading(true);

    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts/"
      );
      const formated = await response.json();
      setData(formated);
    } catch (error) {
      console.error(error);
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 3000);
    }

    // setLoading(true);
    // fetch("https://jsonplaceholder.typicode.com/posts/")
    //   .then((response) => response.json())
    //   .then((json) => setData(json))
    //   .catch((error) => console.error(error))
    //   .finally(() =>
    //     setTimeout(() => {
    //       setLoading(false);
    //     }, 3000)
    //   );
  };
  const _renderItem = ({ item }) => {
    const { title, body } = item;
    return (
      <ItemCard
        title={title}
        body={body}
        onPress={() => navigation.navigate("details", { title, body })}
      />
    );
  };
  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <Text style={styles.header}>My Data</Text>

      {isLoading ? (
        <ActivityIndicator color="" />
      ) : (
        <FlatList
          data={data}
          showsVerticalScrollIndicator={false}
          keyExtractor={(_, index) => index.toString()}
          renderItem={_renderItem}
        />
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  header: {
    alignSelf: "center",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  container: {
    flex: 1,
    paddingTop: 25,
    paddingHorizontal: 10,
  },
});
