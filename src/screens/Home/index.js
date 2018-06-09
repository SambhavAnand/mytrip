/*Library Imports*/
import React from 'react';
import {
  View,
  Text,
  Animated,
  Alert,
  Linking,
  ActivityIndicator
} from 'react-native';
import MapView from 'react-native-maps';
import {
  connect
} from 'react-redux';


/*Custom Imports*/
import {
  DestinationMarker,
  OriginMarker,
  LocationButton,
  LocationSearch,
  GoButton
} from './components';
import {
  setOriginLocation,
  setDestinationLocation,
} from '../../redux/actions/setLocationActions';
import {
  setUberPrices,
  setLyftPrices,
  setTaxiPrice
} from '../../redux/actions/setPricesActions';
import {getPrices, compareTwoCoords, tryLocationAuth} from '../../utilities/services';
import styles from './styles';

class Home extends React.Component {

   constructor(props) {
     super(props);
     this.state = {
       action: null,
       textInputHide: true,
       placeholder: 'Search Origin',
       text: '',
       goButtonStyle: new Animated.Value(0),
       loading: false
     }
   }
   dismissLocationSearch = () => {
     this.setState({textInputHide:true})
   }
   componentDidUpdate() {
     this.mapview.fitToSuppliedMarkers(["originMarker", "destinationMarker"], true);
   }

  componentDidMount() {
      const {dispatch} = {...this.props};
      navigator.geolocation.getCurrentPosition(position => dispatch(setOriginLocation({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
        value: "Current Location",
        isLatLong: false
      })), error => {
        Alert.alert(
          'Error getting current location',
          'Try authorizing again or enter location manually',
          [
            {
              text: 'Ok',
              onPress: ()=>{}
            },
            {
              text: 'Authorize',
              onPress: ()=> Linking.openURL('app-settings:')
            }
          ]
        )
      })
    }



    animateGoButton = () => {
      Animated.timing(this.state.goButtonStyle, {
        toValue: 1,
        duration: 1000
      }).start();
    }
    componentWillReceiveProps(nextProps) {
      if(nextProps.location.destinationLocation) this.animateGoButton();
    }

    getCabPrices = () => {

      let {originLocation, destinationLocation} = {...this.props.location};
      let {dispatch} = {...this.props};
      this.setState({loading:true});
      getPrices(originLocation.latitude, originLocation.longitude, destinationLocation.latitude, destinationLocation.longitude)
        .then(prices=>{
          let {uber, lyft, taxi} = {...prices};
          dispatch(setUberPrices(uber));
          dispatch(setLyftPrices(lyft));
          dispatch(setTaxiPrice(taxi));
          this.setState({loading:false});
        })
        .then(()=>this.props.navigation.navigate('ResultScreen'))
        .catch(error=>{
          this.setState({loading: false});
          Alert.alert(
          'Something went wrong',
          'Try again',
          [
            {
              text: 'Ok', onPress: () => {}
            }
          ]
        )});
    }



  render() {
    const {dispatch} = {...this.props};
    let {originLocation, destinationLocation} = {...this.props.location};
    let {uberPrices,lyftPrices,taxiPrice} = {...this.props.prices}
    return (
      <View style={styles.container}>

        <MapView
          style={styles.map}
          ref={(mapview)=>(this.mapview=mapview)}
          region={{
            ...originLocation,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}
        >
        {
          originLocation &&
            <OriginMarker
              dispatch={dispatch}
              originLocation={originLocation}
              action={setOriginLocation}
            />
        }
        {
          destinationLocation &&
          <DestinationMarker
            dispatch={dispatch}
            destinationLocation={destinationLocation}
            action={setDestinationLocation}
          />
        }

        </MapView>
          {
            this.state.loading &&
            <ActivityIndicator
            size="large"
            color="#488fc8"
            style={styles.actIn}/>
          }
          {
            this.state.action &&
            <LocationSearch
              text={this.state.text}
              dismissLocationSearch={this.dismissLocationSearch}
              dispatch={dispatch}
              textInputHide={this.state.textInputHide}
              action={this.state.action}
              placeholder={this.state.placeholder}
            />

          }
          {
            !this.state.loading &&
            <LocationButton
              onPress={()=>this.setState({action:setOriginLocation, textInputHide:false, placeholder: 'Search Origin', text: originLocation?originLocation.value:''})}
              location={originLocation}
              content={"Enter Origin"}
              origin={true}
            />
          }
          {
            !this.state.loading &&
            <LocationButton
              onPress={()=>this.setState({action:setDestinationLocation, textInputHide: false, placeholder: 'Search Destination', text: destinationLocation?destinationLocation.value:''})}
              location={destinationLocation}
              content={"Enter Destination"}
              origin={false}
            />
          }
          {
            !this.state.loading &&
            <Animated.View
              style={{
                opacity: this.state.goButtonStyle
              }}
            >
              {
                destinationLocation  &&
                <GoButton
                  onPress={()=>this.getCabPrices()}
                />
              }

            </Animated.View>
          }

      </View>
    );
  }
}
/*

*/
Home = connect(state => {
  return {
    location: state.location,
    prices: state.prices
  }
})(Home);
export default Home;
