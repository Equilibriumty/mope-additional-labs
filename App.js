import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import AppLoading from "expo-app-loading";
import * as Font from "expo-font";
import { TestScreen } from "./screens/TestScreen";
import { TestScreen2 } from "./screens/TestScreen2";
import { Home } from "./screens/Home";
import { Button, View } from "react-native";

let customFonts = {
  "Inter-Black": require("./assets/fonts/Inter-Black.ttf"),
  "Inter-Light": require("./assets/fonts/Inter-Light.ttf"),
  "Inter-Medium": require("./assets/fonts/Inter-Medium.ttf"),
  "Inter-SemiBold": require("./assets/fonts/Inter-SemiBold.ttf"),
};

const Drawer = createDrawerNavigator();

export default class App extends React.Component {
  state = {
    fontsLoaded: false,
  };

  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this._loadFontsAsync();
  }
  Drawer = createDrawerNavigator();
  render() {
    if (this.state.fontsLoaded) {
      return (
        <NavigationContainer>
          <Drawer.Navigator initialRouteName="Home">
            <Drawer.Screen name="Лаб 3.1" component={Home} />
            <Drawer.Screen name="Лаб 3.2" component={TestScreen} />
            <Drawer.Screen name="Лаб 3.3" component={TestScreen2} />
          </Drawer.Navigator>
        </NavigationContainer>
      );
    } else {
      return <AppLoading />;
    }
  }
}
