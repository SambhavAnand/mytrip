/*Library Imports*/
import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  Alert
} from 'react-native';
import {connect} from 'react-redux';
/*Custom Imports*/
import styles from './styles';
import {openUberApp} from '../../utilities/services';


class ResultScreen extends React.Component {
  constructor(props) {
    super(props);
  }
  openUber = (uberType) => {
    const {originLocation, destinationLocation} = {...this.props.location};
    openUberApp(uberType, originLocation, destinationLocation)
    .catch(error=>Alert.alert(
      'Something went wrong',
      'Try again',
      [
        {
          text: 'Ok',
          onPress: ()=>{}
        }
      ]
    ));
  }
  render() {
    const {uberPrices, lyftPrices, taxiPrice} = {...this.props.prices};
    const {originLocation, destinationLocation} = {...this.props.location};
    return (
      <View style={styles.mainView}>
        <View style={styles.tripView}>
          <View style={styles.tripHeader}>
            <TouchableOpacity
              onPress={()=>this.props.navigation.goBack()}
            >
              <Image
                style={styles.tripIcon}
                source={require("../../assets/backarrow.png")}
              />
            </TouchableOpacity>
            <View>
                <Image
                  style={styles.appLogo}
                  source={require("../../assets/icon.png")}
                />
            </View>
           </View>
          <View style={styles.locHolder}>
            <TouchableOpacity
              onPress={()=>this.props.navigation.goBack()}
              style={styles.locOrigin}
            >
              <Image style={styles.tripIcon} source={require("../../assets/home2.png")}/>
              <Text style={styles.locText}>{originLocation.value}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={()=>this.props.navigation.goBack()}
              style={styles.locDestination}
            >
              <Image style={styles.tripIcon} source={require("../../assets/flag2.png")}/>
              <Text style={styles.locText}>{destinationLocation.value}</Text>
            </TouchableOpacity>
          </View>
        </View>
        <ScrollView style={styles.priceView}>
            <View>
              <Image style={styles.logo} source={require("../../assets/uberlogo.png")}/>
              <ScrollView
                style={styles.priceScroll}
                horizontal={true}
                bounces={true}>
                  {
                    uberPrices.map((uberPrice, key)=>
                      uberPrice.priceLow?
                        (
                          <TouchableOpacity
                            style={styles.pricingView}
                            key={key}
                            onPress={()=>this.openUber(uberPrice)}
                          >
                            <View style={styles.rideTypeUber}>
                              <Text style={styles.rideTypeText}>{uberPrice.displayName}</Text>
                            </View>
                            <Text style={styles.price}>${uberPrice.priceLow} - ${uberPrice.priceHigh}</Text>
                          </TouchableOpacity>
                      ):null)
                  }
              </ScrollView>
            </View>
            <View>
              <Image style={styles.logo} source={require("../../assets/lyft.png")}/>
              <ScrollView
                style={styles.priceScroll}
                horizontal={true}>
                  {
                    lyftPrices.map((lyftPrice, key)=>
                      (
                        <TouchableOpacity style={styles.pricingView} key={key}>
                          <View style={styles.rideTypeLyft} >
                            <Text style={styles.rideTypeText}>{lyftPrice.displayName}</Text>
                          </View>
                          <Text style={styles.price}>
                          {lyftPrice.priceLow===lyftPrice.priceHigh?'$' + parseInt(lyftPrice.priceLow/100):'$'+parseInt(lyftPrice.priceLow/100) +'- $'+parseInt(lyftPrice.priceHigh/100)}
                          </Text>
                        </TouchableOpacity>
                    ))
                  }
              </ScrollView>
            </View>
            <View>
              <Image style={styles.logo} source={require("../../assets/nyctaxi.jpg")}/>
              <ScrollView
                style={styles.priceScroll}
                horizontal={true}
              >
                <TouchableOpacity style={styles.pricingView}>
                  <View style={styles.rideTypeTaxi}>
                    <Text style={styles.rideTypeText}>Taxi</Text>
                  </View>
                  <Text style={styles.price}>${taxiPrice}</Text>
                </TouchableOpacity>
              </ScrollView>
            </View>
        <Text style={{color:"#555"}}>Results powered by MyTrip</Text>
        </ScrollView>
      </View>
    );
  }
}

ResultScreen = connect(state => {
  return {
    prices: state.prices,
    location: state.location
  }
})(ResultScreen);
export default ResultScreen;
