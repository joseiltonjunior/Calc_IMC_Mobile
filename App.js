import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

import ImcForm from './src/imc/ImcForm';
import ImcResult from './src/imc/ImcResult';

export default class App extends Component {

  constructor(props) {
    super(props);
  }

  state = {
    showResult: false,
    imc: '',
    classificacao: '',
    grauObesidade: ''
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.textIntro}>Calcule seu IMC</Text>
        <ImcForm showResult={this.showResult} />

        {this.state.showResult && (
          <ImcResult imc={this.state.imc} classificacao={this.state.classificacao} grauObesidade={this.state.grauObesidade} />
        )}

      </View>
    );
  }

  showResult = (result) => {
    this.setState({
      showResult: true,
      imc: result.imc,
      classificacao: result.classificacao,
      grauObesidade: result.grauObesidade
    });
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#222',
  },

  textIntro: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 25,
    marginTop: 30
  },

  resultTitle: {
    fontSize: 20,
    fontWeight: '400',
    textAlign: 'center',
    marginTop: 90,
    marginBottom: 20,
    color: '#ddd'
  },

  resultDescription: {
    fontSize: 16,
    fontWeight: '400',
    textAlign: 'center',
    color: '#ddd'
  }

});
