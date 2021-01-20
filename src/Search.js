/**
 * Search page for the application
 * Contains searchBar and body
 * The body is either
 * -> "Please type smth" instruction (waiting input)
 * -> PokeLoader when request is sent (loading)
 * -> SearchBody when response has come (display results)
 */

// --- IMPORTS ---
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { SearchBar } from "react-native-elements";
import PokeLoader from "./PokeLoader";
import SearchBody from "./SearchBody";
import axios from "axios";

// --- CLASS ---
class Search extends React.Component {
  /**
   * State of the Search Component
   * Manage the important values of this component
   */
  state = {
    search: "", //What was typed
    onCall: false, //Is calling the API
    data: {}, //Response data
  };
  //HELPER FUNCTIONS
  /**
   * Request api
   */
  searchPoke = () => {
    this.setState({ onCall: true });
    var url =
      "https://pokeapi.co/api/v2/pokemon/" + this.state.search.toLowerCase();
    var self = this;

    axios
      .get(url)
      .then((response) => {
        self.setState({ data: response.data });
      })
      .catch((error) => {
        self.setState({ data: undefined });
      })
      .finally(() => {
        self.setState({ onCall: false });
      });
  };

  /**
   * Render Loader(request sent) or Body (response received)
   */
  renderBody = () => {
    if (this.state.onCall) {
      return <PokeLoader />;
    } else {
      return <SearchBody data={this.state.data} />;
    }
  };

  //RENDER
  render() {
    return (
      <View style={{ flex: 1 }}>
        {/* SearchBar */}
        <SearchBar
          round
          lightTheme
          placeholder="Search Pokemon"
          inputStyle={styles.searchBarInput}
          onChangeText={(search) => {
            this.setState({ search });
          }}
          value={this.state.search}
          searchIcon
          onSubmitEditing={this.searchPoke}
        />
        {/* Body */}
        {this.renderBody()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  searchBarInput: {
    color: "black",
  },
});

// --- EXPORT ---
export default Search;
