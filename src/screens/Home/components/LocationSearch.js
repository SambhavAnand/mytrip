/**/
import React from 'react';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import {
  View,
  Dimensions,
  StyleSheet
} from 'react-native';
/*Custom Imports*/
import {locationStyles as styles, googlePlacesStyle as inputStyles} from './styles.js';




export default class LocationSearch extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    let {dispatch, action, textInputHide, placeholder, text} = {...this.props};
    return (
      <View style={styles.viewStyle}>
        <GooglePlacesAutocomplete
            placeholder={placeholder}
            minLength={2} // minimum length of text to search
            autoFocus={true}
            returnKeyType={'search'} // Can be left out for default return key https://facebook.github.io/react-native/docs/textinput.html#returnkeytype
            listViewDisplayed={false}   // true/false/undefined
            fetchDetails={true}
            renderDescription={row => row.description || row.vicinity} // custom description render
            onPress={(data, details = null) => { // 'details' is provided when fetchDetails = true
              let {lat, lng} = {...details.geometry.location};
              let {name} = {...details};
              if(details.description === "Current location") name="Current Location"
              dispatch(action({latitude:lat, longitude:lng, value: name, isLatLong: false}));
              this.map._onBlur();
              this.props.dismissLocationSearch();
            }}
            text={text}
            ref={map=>(this.map = map)}
            getDefaultValue={() => ''}
            query={{
              key: 'AIzaSyDw5XAceefaWiQT1dCdfkF_XXBDruTbdw0',
              language: 'en', // language of the results
            }}
            textInputHide={textInputHide}

            styles={inputStyles}

            currentLocation={true} // Will add a 'Current location' button at the top of the predefined places list
            currentLocationLabel="Current location"
            nearbyPlacesAPI={'None'}

            debounce={200}
        />
      </View>
    )
  }
}
