/**
 * Loading animation for the application
 * Only contains a view with an image (gif)
 */

// --- IMPORTS ---
import React from "react";
import { StyleSheet, View, Image } from "react-native";
const file = require("../assets/tenor.gif");

// --- CLASS ---
class PokeLoader extends React.Component {
  render() {
    var source =
      "https://media.tenor.com/images/39d6060576a516f1dd437eafccafbdb1/tenor.gif";
    return (
      <View style={{ flex: 1 }}>
        <Image source={file} style={styles.img} />
      </View>
    );
  }
}

// --- STYLES ---
const styles = StyleSheet.create({
  img: {
    height: 400,
    width: 400,
    justifyContent: "center",
    alignItems: "center",
  },
});

// --- EXPORT FOR USE IN ANOTHER COMPONENT ---
export default PokeLoader;
