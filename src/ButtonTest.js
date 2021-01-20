import React from "react";
import { Button } from "react-native";

export default class ButtonTest extends React.Component {
  render() {
    return <Button title={this.props.titi} />;
  }
}
