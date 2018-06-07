/*Lubrary Imports*/
import React from 'react';
import MapView from 'react-native-maps';

/*Custom Imports*/
import {CustomMarker} from '../../../components';
const marker = require('../../../assets/origin.png');

export default class OriginMarker extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {dispatch, action, originLocation} = {...this.props};
    if(originLocation) return (
      <CustomMarker
        image={marker}
        identifier={"originMarker"}
        coordinate={originLocation}
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
