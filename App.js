import "react-native-gesture-handler";
import React from "react";

import { useFonts } from "expo-font";

import LoginScreen from "./Screens/LoginScreen";
import HomeScreen from "./Screens/HomeScreen";
import Chat from "./Screens/Chat";
import ViewNearestHospital from "./Screens/ViewNearestHospital";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();
//exporting fonts needed for nativebase
export default function App() {
  const [loaded] = useFonts({
    Roboto: require("native-base/Fonts/Roboto.ttf"),
    Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
  });
  if (!loaded) {
    return null;
  }
  //basic navigation stack login-->homecreen
  //will be changed later
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{ title: "Welcome", headerShown: false }}
          name="Login"
          component={LoginScreen}
        />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen
          name="ViewNearestHospital"
          component={ViewNearestHospital}
          options={{ title: "Map test" }}
        />
        <Stack.Screen
          name="Chat"
          options={{ headerShown: false }}
          component={Chat}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
