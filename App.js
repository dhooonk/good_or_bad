import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TextInput,
  Platform,
  ScrollView
} from "react-native";
import ToDo from "./ToDo";

const { height, width } = Dimensions.get("window");
export default class App extends React.Component {
  state = {
    newToDo: ""
  };

  _controllNewToDo = text => {
    this.setState({
      newToDO: text
    });
  };

  render() {
    const { newToDO } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Good or Bad</Text>
          <Text style={styles.subTitle}>Check Daily your habit</Text>
        </View>

        <View style={styles.content}>
          <Text style={styles.contentTitle}>To Do List</Text>
          <TextInput
            style={styles.input}
            placeholder={"New to do"}
            value={newToDO}
            onChangeText={this._controllNewToDo}
            returnKeyType={"done"}
            autoCorrect={false}
          />
          <ScrollView contentContainerStyle={styles.toDos}>
            <ToDo text={"Hello I'm a To Do"}></ToDo>
          </ScrollView>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "flex-start",
    justifyContent: "center",
    marginTop: 50
  },

  titleContainer: {
    width: width,
    alignItems: "center",
    backgroundColor: "#00cec9"
  },

  title: {
    flexDirection: "row",
    fontWeight: "300",
    fontSize: 30,
    marginTop: 100,
    marginLeft: 10
  },

  subTitle: {
    flexDirection: "row",
    fontWeight: "200",
    fontSize: 20,
    marginBottom: 30,
    marginLeft: 10
  },

  content: {
    fontSize: 30,
    marginTop: 30
  },

  contentTitle: {
    fontSize: 30,
    marginLeft: 10
  },

  input: {
    padding: 20,
    fontSize: 30
  },

  toDos: {
    alignItems: "center"
  }
});
