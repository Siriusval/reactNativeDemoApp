/**
 * Main page for the application
 * Only contains a start button to SearchPage
 */

// --- IMPORTS ---
import React from "react";
import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  Dimensions,
} from "react-native";
import { Button } from "react-native-elements";

// --- ASSETS ---
var myBackground = require("../assets/icons/landing.jpg");

// --- CLASS ---
class Landing extends React.Component {
  render() {
    return (
      //Main view
      <View style={{ flex: 1 }}>
        {/* Background */}
        <ImageBackground
          source={myBackground}
          style={styles.imageBackgroundStyle}
        >
          {/* View with title and button */}
          <View style={styles.viewStyle}>
            {/* Title */}
            <Text style={styles.titleStyle}>Welcome to PokeSearch</Text>
            {/* Button */}
            <Button
              color="blue"
              title="Start searching"
              onPress={() => this.props.switchScreen("search")}
            />
          </View>
        </ImageBackground>
      </View>
    );
  }
}

// --- STYLES ---
/**
 * A style is created for each component
 * it's easier to group them here than use inline style everywhere in your code
 */
const styles = StyleSheet.create({
  imageBackgroundStyle: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  viewStyle: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  titleStyle: {
    fontSize: 30,
    color: "blue",
    alignItems: "center",
  },
  buttonStyle: {
    margin: 10,
  },
  buttonText: {
    color: "white",
  },
});

// --- EXPORT FOR USE IN ANOTHER COMPONENT ---

export default Landing;
