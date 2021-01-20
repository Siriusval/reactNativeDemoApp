/**
 * SearchBody, show the content of the response (w/ PokeAPI)
 * Display a name, picture, and list of abilities of the pokemon
 */
import React from "react";
import {
  ScrollView,
  Text,
  StyleSheet,
  Image,
  View,
  ImageBackground,
  Dimensions,
} from "react-native";
import { ListItem } from "react-native-elements";

// --- GLOBAL ---
var height = Dimensions.get("window").height;
var width = Dimensions.get("window").width;

// --- CLASS ---
class SearchBody extends React.Component {
  render() {
    var pokemon = this.props.data;
    //if response is empty
    if (pokemon == undefined) {
      return (
        <View style={styles.viewStyle}>
          <Text style={styles.header}>This pokemon doesn't exist.</Text>
        </View>
      );
    }
    //if nothing was typed
    else if (Object.entries(pokemon).length === 0) {
      return (
        <View style={styles.viewStyle}>
          <Text style={styles.header}>Please type a name or a number.</Text>
        </View>
      );
    }
    return (
      // Background
      <ImageBackground
        source={{
          uri: "http://pokemongolive.com/img/posts/raids_loading.png",
        }}
        style={styles.imageBackgroundStyle}
        imageStyle={{ opacity: 0.5 }}
      >
        {/* ScrollView */}
        <ScrollView style={{ flex: 1 }}>
          {/* Name */}
          <Text style={styles.header}>
            #{pokemon.id} - {pokemon.name.toUpperCase()}
          </Text>
          {/* Image */}
          <View style={styles.viewStyle}>
            <Image
              source={{ uri: pokemon.sprites.front_default }}
              style={styles.img}
            />
          </View>
          {/* Size & Abilities*/}
          <View style={styles.info}>
            <ListItem itemDivider>
              <Text style={{ fontWeight: "bold" }}>Size</Text>
            </ListItem>
            <ListItem>
              <Text>Weight - {pokemon.weight / 10}kg</Text>
            </ListItem>
            <ListItem>
              <Text>Height - {pokemon.height / 10}m</Text>
            </ListItem>
            <ListItem itemDivider>
              <Text style={{ fontWeight: "bold" }}>Abilities</Text>
            </ListItem>
            {pokemon.abilities.map((l, i) => (
              <ListItem key={i}>
                <Text>{l.ability.name}</Text>
              </ListItem>
            ))}
          </View>
        </ScrollView>
      </ImageBackground>
    );
  }
}

// --- STYLES ---
const styles = StyleSheet.create({
  imageBackgroundStyle: {
    flex: 1,
    resizeMode: "cover",
    // height: height,
    //width: width,
  },
  header: {
    fontSize: 30,
    color: "red",
    textAlign: "center",
  },
  viewStyle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  img: {
    height: 200,
    width: 200,
    justifyContent: "center",
    alignItems: "center",
  },
  info: {
    flex: 1,
    backgroundColor: "white",
    opacity: 0.8,
  },
});
// --- EXPORT ---
export default SearchBody;
