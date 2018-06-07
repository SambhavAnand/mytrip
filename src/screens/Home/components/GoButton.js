/*Library Imports*/
import React from 'react';
import { Marker } from 'react-native-maps';
import { StyleSheet, TouchableOpacity, View, Text} from 'react-native';
import {goButtonStyle} from './styles.js';

/*Constants*/
export default class GoButton extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { style, onPress } = { ...this.props };
    return (
          <TouchableOpacity
            style={goButtonStyle.buttonStyle}
            onPress={onPress}
          >
            <Text style={goButtonStyle.textStyle}>Show Results</Text>
          </TouchableOpacity>
    );
  }
}
