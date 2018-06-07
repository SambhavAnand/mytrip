import axios from 'axios';
import {Linking} from 'react-native';
import {UBER_CLIENT_ID, LYFT_CLIENT_ID} from './config';

export const getPrices = (start_latitude,start_longitude,end_latitude,end_longitude) => {
  return new Promise((resolve, reject) => {
    axios.get('https://righttripapi.herokuapp.com/taxi/price', {
      params: {
        start_latitude,
        start_longitude,
        end_latitude,
        end_longitude
      }
    }).then(result=>resolve(result.data))
    .catch(error=>reject(error))
  })
}

export const compareTwoCoords = (coord1, coord2) => {
  if(coord1.latitude === coord2.latitude && coord1.longitude===coord2.longitude) return true;
  else return false;
}

export const openUberApp = (uberType,originLocation,destinationLocation) => {
  return new Promise((resolve, reject) => {
    Linking.openURL(`uber://?client_id=${UBER_CLIENT_ID}&action=setPickup&pickup[latitude]=${originLocation.latitude}&pickup[longitude]=${originLocation.longitude}&dropoff[latitude]=${destinationLocation.latitude}&dropoff[longitude]=${destinationLocation.longitude}&product_id=${uberType.productId}`)
    .then(open=>resolve(open))
    .catch(error=>reject(error));
  });
}

export const openLyftApp = (lyftType, originLocation, destinationLocation) => {
  return new Promise((resolve, reject) => {
    Linking.openURL(`lyft://ridetype?id=${lyftType.rideType}&pickup[latitude]=${originLocation.latitude}&pickup[longitude]=${originLocation.longitude}&destination[latitude]=${destinationLocation.latitude}&destination[longitude]=${destinationLocation.longitude}&partner=${LYFT_CLIENT_ID}`)
    .then(open=>resolve(open))
    .catch(error=>reject(error));
  });
}
