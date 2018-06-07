import axios from 'axios';
import {Linking} from 'react-native';

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

export const openUberApp = (uberPrice,originLocation,destinationLocation) => {
  return new Promise((resolve, reject) => {
    Linking.openURL(`uber://?client_id=HzlOkKu18wLp1gBSr02NrkYjuRIiDzaT&action=setPickup&pickup[latitude]=${originLocation.latitude}&pickup[longitude]=${originLocation.longitude}&dropoff[latitude]=${destinationLocation.latitude}&dropoff[longitude]=${destinationLocation.longitude}&product_id=a1111c8c-c720-46c3-8534-2fcdd730040d`)
    .then(open=>resolve(open))
    .catch(error=>reject(error));
  });
}

export const openLyftApp = (lyftPrice, originLocation, destinationLocation) => {
  return new Promise((resolve, reject) => {
    Linking.openURL(`lyft://rideType?id=${lyftPrice.rideType}&pickup[latitude]=${originLocation.latitude}&pickup[longitude]=${originLocation.longitude}&dropoff[latitude]=${destinationLocation.latitude}&dropoff[longitude]=${destinationLocation.longitude}`)
    .then(open=>resolve(open))
    .catch(error=>reject(error));
  });
}
