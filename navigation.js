import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Details from "./screens/details";
import Home from "./screens/home";
import Photos from "./screens/photos";
import Input from "./screens/input";

const Stack = createStackNavigator();

function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode={"none"}>
        <Stack.Screen name="home" component={Home} />
        <Stack.Screen name="details" component={Details} />
        <Stack.Screen name="photos" component={Photos} />
        <Stack.Screen name="input" component={Input} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigator;
