import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { PhotoCard } from "../components/photoCard";

export default function Photos({ navigation }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally();
  };

  const _renderItem = ({ item }) => {
    const { title, url } = item;
    return (
      <PhotoCard
        title={title}
        imageSource={url}
        onPress={() => navigation.navigate("input")}
      />
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar style={"dark"} />
      {
        <FlatList
          data={data}
          showsVerticalScrollIndicator={false}
          keyExtractor={(_, index) => index.toString()}
          renderItem={_renderItem}
        />
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 25,
    paddingHorizontal: 15,
  },
});
