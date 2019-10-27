import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default class App extends Component {

  constructor(props) {
    super(props);
  }

  state = {
    peso: '',
    altura: ''
  }

  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.label}>Altura</Text>
          <TextInput
            style={styles.input}
            keyboardType={'numeric'}
            placeholder="Altura (ex: 1,70)"
            onChangeText={altura => this.setState({ altura })}
            value={this.state.altura}
          />

          <Text style={styles.label}>Peso</Text>
          <TextInput
            style={styles.input}
            keyboardType={'numeric'}
            placeholder="Peso (ex: 70)"
            onChangeText={peso => this.setState({ peso })}
            value={this.state.peso}
          />
        </View>

        <View>

        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },

  label: {
    fontSize: 20,
    fontWeight: '400',
    color: '#212529'
  },

  input: {

  }

});
