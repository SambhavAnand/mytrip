/*Library Imports*/
import React from 'react';
import {Marker} from 'react-native-maps';

export default class CustomMarker extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {coordinate, onDragEnd, identifier, image} = {...this.props};
    return (
      <Marker
        identifier={identifier}
        draggable
        image={image}
        coordinate={coordinate}
        onDragEnd={(e)=>onDragEnd(e.nativeEvent.coordinate)}
      >

      </Marker>
    )
  }
}
