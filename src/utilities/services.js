import axios from 'axios';

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
