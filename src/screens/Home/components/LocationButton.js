/*Library Imports*/
import React from 'react';
import { Marker } from 'react-native-maps';
import { StyleSheet, TouchableOpacity, View, Text} from 'react-native';
import {locationButtonStyle as styles} from './styles.js';
/*Constants*/

export default class LocationButton extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { onPress, location, content,origin } = { ...this.props };
    return (
          <TouchableOpacity
            style={origin?styles.buttonStyleOrigin:styles.buttonStyleDestination}
            onPress={onPress}
          >
            {
              location && location.value && (
                <Text style={styles.textStyle}>{location.value}</Text>
              )
            }
            {
              (!location || (!location.name && !location.latitude)) && (
                <Text style={styles.placeholderStyle}>{content}</Text>
              )
            }

          </TouchableOpacity>
    );
  }
}
