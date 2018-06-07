/*Lubrary Imports*/
import React from 'react';
import MapView from 'react-native-maps';


/*Custom Imports*/
import {CustomMarker} from '../../../components';
const marker = require('../../../assets/destination.png');

export default class DestinationMarker extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {dispatch, action, destinationLocation} = {...this.props};
    if(destinationLocation) return (
      <CustomMarker
        identifier={"destinationMarker"}
        image={marker}
        coordinate={destinationLocation}
        onDragEnd={(coordinate)=>
          dispatch(action({
            latitude: coordinate.latitude,
            longitude: coordinate.longitude,
            value: 'Marker',
          }))}
      />
    )
    else return null;
  }
}
