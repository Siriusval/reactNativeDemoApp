import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Platform, Text } from "react-native";
import Landing from "./src/Landing";
import Search from "./src/Search";
import ButtonTest from "./src/ButtonTest";

export default class App extends React.Component {
  state = {
    currentScreen: "landing",
  };

  renderScreen = () => {
    if (this.state.currentScreen === "landing") {
      return <Landing switchScreen={this.switchScreen} />;
    } else if (this.state.currentScreen === "search") {
      return <Search />;
    }
  };

  switchScreen = (currentScreen) => {
    this.setState({ currentScreen });
  };

  render() {
    return (
      <View style={styles.container}>
        <StatusBar style="auto" />
        {this.renderScreen()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Platform.OS === "android" ? 30 : 0,
  },
});
